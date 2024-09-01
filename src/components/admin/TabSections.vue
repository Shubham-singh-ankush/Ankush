<template>
    <div>
        <!-- Add New Tab Button -->
        <div class="mb-3">
            <button class="btn btn-success" @click="showModal(false)">Add New Tab</button>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{ isEditMode ? 'Update Tab' : 'Add New Tab' }}</h5>
                        <button type="button" class="close" @click="hideModal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="submitForm">
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-xl-5 mt-4">
                                    <label for="tab_name">Name</label>
                                    <input type="text" class="form-control" v-model="tab_name" placeholder="Button Content" />
                                </div>
                                <div class="col-xl-5 mt-4">
                                    <label for="tab_url">URL</label>
                                    <input type="text" class="form-control" v-model="tab_url" placeholder="Button URL" />
                                </div>

                                <div class="uploadbox me-3">
                                    <div class="imgbox">
                                        <img :src="iconImageUrl" alt="Icon" v-if="icon_image" />
                                        <input class="form-control" name="icon_image" ref="file" type="file" @change="onFileChange" />
                                    </div>
                                    <div class="bottombg row">
                                        <div class="col-9">
                                            <h6>Change icon</h6>
                                        </div>
                                    </div>
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

        <!-- Tabs Table -->
        <div class="tabs-table">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>URL</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody v-if="tabsData.length > 0">
                    <tr v-for="(tab, index) in tabsData" :key="tab.id">
                        <td>{{ index + 1 }}</td>
                        <td>{{ tab.tab_name || 'No Name Available' }}</td>
                        <td>{{ tab.tab_url || 'No URL Available' }}</td>
                        <td>
                            <button class="btn btn-primary btn-sm" @click="editTab(tab)">Edit</button>
                            <button class="btn btn-danger btn-sm" @click="deleteTab(tab.id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
                <tr v-else>
                    <td colspan="12">No tabs available.</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import { Modal } from 'bootstrap';
import Swal from 'sweetalert2';
import { addUpdateTabs, getTabs, deleteTabData, } from '../../services/admin';
import { getImageUrl } from '../../helpers/imageHelper';

export default {
    name: "TabSections",
    data() {
        return {
            tab_name: '',
            tab_url: '',
            icon_image: null,
            icon_image: '',
            tabsData: [],
            isEditMode: false,
            editingTabId: null,
        };
    },
    computed: {
        iconImageUrl() {
            return this.icon_image ? `${getImageUrl()}${this.icon_image}` : '';
        }
    },
    methods: {
        showModal(isEditMode, tab = null) {
            this.isEditMode = isEditMode;
            if (isEditMode && tab) {
                this.editingTabId = tab.id;
                this.tab_name = tab.tab_name || '';
                this.tab_url = tab.tab_url || '';
                this.icon_image = tab.icon_image || '';
            } else {
                this.editingTabId = null;
                this.tab_name = '';
                this.tab_url = '';
                this.icon_image = null;
                this.icon_image = '';
            }
            const modalElement = document.getElementById('exampleModal');
            const modal = new Modal(modalElement);
            modal.show();
        },
        hideModal() {
            const modalElement = document.getElementById('exampleModal');
            const modal = Modal.getInstance(modalElement);
            modal.hide();
        },
        async submitForm() {
            const formData = new FormData();
            if (this.isEditMode) {
                formData.append('id', this.editingTabId);
            }
            formData.append('tab_name', this.tab_name);
            formData.append('tab_url', this.tab_url);
            if (this.icon_image) {
                formData.append('icon_image', this.icon_image);
            }

            try {
                const response = await addUpdateTabs(formData, this.isEditMode ? this.editingTabId : null);

                if (response.status === 200) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: response.data.message,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    this.hideModal();
                    this.fetchTabsData();
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
        async editTab(tab) {
            this.showModal(true, tab);
        },
        async fetchTabsData() {
            try {
                const response = await getTabs();
                if (response.status === 200) {
                    this.tabsData = response.data.data;
                } else {
                    throw new Error(response.data.message);
                }
            } catch (error) {
                console.error('Error fetching tabs data:', error);
            }
        },
        async deleteTab(tabId) {
            try {
                const result = await Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                });

                if (result.isConfirmed) {
                    const response = await deleteTabData(tabId);
                    if (response.status === 200) {
                        Swal.fire('Deleted!', 'Your tab has been deleted.', 'success');
                        this.fetchTabsData();
                    } else {
                        throw new Error(response.data.message || 'Failed to delete the tab.');
                    }
                }
            } catch (error) {
                Swal.fire({
                    text: error.message || 'Something went wrong.',
                    icon: 'error',
                });
            }
        },
        onFileChange(event) {
            const file = event.target.files[0];
            this.icon_image = file ;
        },
    },
    mounted() {
        this.fetchTabsData();
    },
};
</script>

<style scoped>
/* Add your styles here */
</style>

