<template>
  <div>
    <!-- Add New Subtab Button -->
    <div class="mb-3">
      <button class="btn btn-success" @click="showModal(false)">Add New Subtab</button>
    </div>

    <!-- Subtab Modal -->
    <div class="modal fade" id="subtabModal" tabindex="-1" role="dialog" aria-labelledby="subtabModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="subtabModalLabel">{{ isEditMode ? 'Update Subtab' : 'Add New Subtab' }}</h5>
            <button type="button" class="close" @click="hideModal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="submitForm">
            <div class="modal-body">
              <div class="row">
                <div class="col-xl-5 mt-4">
                  <label for="tab">Parent Tab</label>
                  <select v-model="parent_tab_id" class="form-control">
                    <option v-for="tab in tabsData" :key="tab.id" :value="tab.id">{{ tab.tab_name }}</option>
                  </select>
                </div>
                <div class="col-xl-5 mt-4">
                  <label for="subtab_name">Name</label>
                  <input type="text" class="form-control" v-model="subtab_name" placeholder="Subtab Name" />
                </div>
                <div class="col-xl-5 mt-4">
                  <label for="subtab_url">URL</label>
                  <input type="text" class="form-control" v-model="subtab_url" placeholder="Subtab URL" />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="hideModal">Close</button>
              <button type="submit" class="btn btn-primary">{{ isEditMode ? 'Update' : 'Save' }}</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Subtabs Table -->
    <div class="subtabs-table">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Parent Tab</th>
            <th>Name</th>
            <th>URL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-if="subtabsData.length > 0">
          <tr v-for="(subtab, index) in subtabsData" :key="subtab.id">
            <td>{{ index + 1 }}</td>
            <td>{{ getTabName(subtab.tab_categories_id) || 'No Parent Available' }}</td>
            <td>{{ subtab.tab_name || 'No Name Available' }}</td>
            <td>{{ subtab.tab_url || 'No URL Available' }}</td>
            <td>
              <button class="btn btn-primary btn-sm" @click="editSubtab(subtab)">Edit</button>
              <button class="btn btn-danger btn-sm" @click="deleteSubtab(subtab.id)">Delete</button>
            </td>
          </tr>
        </tbody>
        <tr v-else>
          <td colspan="5">No subtabs available.</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';
import Swal from 'sweetalert2';
import { addUpdateSubTab, getSubTabs, deleteSubTabData, getTabs } from '../../services/admin';

export default {
  name: "SubTabSections",
  data() {
    return {
      parent_tab_id: null,
      subtab_name: '',
      subtab_url: '',
      subtabsData: [],
      tabsData: [],
      isEditMode: false,
      editingSubTabId: null,
    };
  },
  methods: {
    showModal(isEditMode, subtab = null) {
      this.isEditMode = isEditMode;
      if (isEditMode && subtab) {
        this.editingSubTabId = subtab.id;
        this.parent_tab_id = subtab.tab_categories_id || null;
        this.subtab_name = subtab.tab_name || '';
        this.subtab_url = subtab.tab_url || '';
      } else {
        this.editingSubTabId = null;
        this.parent_tab_id = null;
        this.subtab_name = '';
        this.subtab_url = '';
      }
      const modalElement = document.getElementById('subtabModal');
      const modal = new Modal(modalElement);
      modal.show();
    },
    hideModal() {
      const modalElement = document.getElementById('subtabModal');
      const modal = Modal.getInstance(modalElement);
      modal.hide();
    },
    async submitForm() {
      const formData = new FormData();
      if (this.isEditMode) {
        formData.append('id', this.editingSubTabId);
      }
      formData.append('parent_tab_id', this.parent_tab_id);
      formData.append('subtab_name', this.subtab_name);
      formData.append('subtab_url', this.subtab_url);

      try {
        const response = await addUpdateSubTab(formData, this.isEditMode ? this.editingSubTabId : null);

        if (response.status === 200) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: response.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          this.hideModal();
          this.fetchSubTabsData();
        } else {
          throw new Error(response.data.message || 'Something went wrong.');
        }
      } catch (error) {
        Swal.fire({
          text: error.message || 'Something went wrong.',
          icon: 'error',
        });
      }
    },
    async editSubtab(subtab) {
      this.showModal(true, subtab);
    },
    async fetchSubTabsData() {
      try {
        const response = await getSubTabs();
        console.log(response.data);  // Check the structure of data returned by the API
        if (response.status === 200) {
          this.subtabsData = response.data.data;
        } else {
          throw new Error(response.data.message);
        }
      } catch (error) {
        console.error('Error fetching subtabs data:', error);
      }
    },
    async fetchTabsData() {
      try {
        const response = await getTabs();
        console.log(response.data);  // Check the structure of data returned by the API
        if (response.status === 200) {
          this.tabsData = response.data.data;
        } else {
          throw new Error(response.data.message);
        }
      } catch (error) {
        console.error('Error fetching tabs data:', error);
      }
    },
    async deleteSubtab(subtabId) {
      try {
        const result = await Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!',
        });

        if (result.isConfirmed) {
          const response = await deleteSubTabData(subtabId);

          if (response.status === 200) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: response.data.message,
              showConfirmButton: false,
              timer: 1500,
            });
            this.fetchSubTabsData();
          } else {
            throw new Error(response.data.message);
          }
        }
      } catch (error) {
        Swal.fire({
          text: error.message || 'Something went wrong.',
          icon: 'error',
        });
      }
    },
    getTabName(tabId) {
      const tab = this.tabsData.find(tab => tab.id === tabId);
      return tab && tab.tab_name ? tab.tab_name : 'No Name Available';
    },
  },
  mounted() {
    this.fetchTabsData();
    this.fetchSubTabsData();
  },
};
</script>
