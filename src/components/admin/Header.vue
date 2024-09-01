<template>
  <section class="dashboard">
    <div class="accordion" id="accordionExample">
      <form method="post" @submit.prevent="submitForm">
        <div class="all-area">
          <!-- Logo Section -->
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne">
                Logo, Button & Icon
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <div class="row">
                  <!-- <input type="text" class="form-control" /> -->
                  <div class="col-xl-2 mt-4">
                    <h4>Button</h4>
                  
                  </div>
                  <div class="col-xl-5 mt-4 mt-4">
                    <input type="text" class="form-control" v-model="headerSection.button.content"
                      placeholder="Button Content" />
                  </div>
                  <div class="col-xl-5 mt-4">
                    <input type="text" class="form-control" v-model="headerSection.button.url"
                      placeholder="Button URL" />
                  </div>
                  <div class="col-xl-2 mt-4"></div>
                  <div class="col-xl-6">
                    <div class="disblock">
                      <div class="uploadbox me-3">
                        <div class="imgbox">
                          <img :src="getImageUrl() + 'images/'+headerSection.logo.name" alt="" />
                          <input class="form-control" name="logo" ref="file" type="file" @change="onFileChangeHeader($event,headerSection.logo.id,'media_storage')" />
                        </div>
                        <div class="bottombg row">
                          <div class="col-9">
                            <h6>Change Logo</h6>
                          </div>
                          <div class="col-3">
                            <img src="/images/admintrash.png" alt="" />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div class="col-xl-2 mt-4"></div>
                  <div class="col-xl-6">
                    <div class="disblock">
                      <div class="uploadbox me-3">
                        <div class="imgbox">
                          <img :src="getImageUrl() + 'images/' + (headerSection.icon && headerSection.icon.name ? headerSection.icon.name : 'default.png')" alt="" />
                          <input class="form-control" name="logo" ref="file" type="file" @change="onFileChangeHeader($event,headerSection.icon.id,'icon')" />
                        </div>
                        <div class="bottombg row">
                          <div class="col-9">
                            <h6>Search Icon</h6>
                          </div>
                          <div class="col-3">
                            <img src="/images/admintrash.png" alt="" />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>




          <div class="accordion-item" v-for="(dataHeader, index) in dataHeaders" :key="dataHeader.id">
            <h2 class="accordion-header" :id="`heading${index}`">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                :data-bs-target="`#collapse${index}`" aria-expanded="false" :aria-controls="`collapse${index}`">
                {{ dataHeader.name }}
              </button>
            </h2>
            <div :id="`collapse${index}`" class="accordion-collapse collapse" :aria-labelledby="`heading${index}`"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <div class="row">
                  <input type="hidden" class="form-control" v-model="dataHeader.id" placeholder="File ID" />
                  <div class="col-xl-2 mt-4">
                    <h4>Heading</h4>
                  </div>
                  <div class="col-xl-5 mt-4">
                    <input type="text" class="form-control" v-model="dataHeader.name" placeholder="Home" />
                  </div>
                  <div class="col-xl-5 mt-4">
                    <input type="text" class="form-control" v-model="dataHeader.slug" placeholder="URL" />
                  </div>

                  <!-- Subcategory Section -->
                  <div class="card-area" v-if="dataHeader.subcategory.length">
                    <div v-for="(subcat, subIndex) in dataHeader.subcategory" :key="subcat.id" class="subcategory-row">
                      <div class="col-xl-2 mt-4 mt-3">
                        <h4>Card {{ subIndex + 1 }}</h4>
                      </div>
                        <input type="hidden" class="form-control" v-model="subcat.id">
                      <div class="col-xl-5 mt-4">
                        <input type="text" class="form-control" v-model="subcat.name" placeholder="Enter Your Card Heading" />
                      </div>
                      <div class="col-xl-5 mt-4">
                        <input type="text" class="form-control " v-model="subcat.slug" placeholder="URL" />
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-6">
                    <div class="disblock">
                      <div class="uploadbox me-3">
                        <div class="imgbox">
                          <img
                            :src="dataHeader.icons && dataHeader.icons.length ? getImageUrl() + 'images/' + dataHeader.icons[0].name : ''"
                            alt="" />



                          <!-- <input
                          class="form-control"
                          name="icon_image"
                          type="file"
                          @change="onFileChange($event, dataHeader.id, index)"
                        /> -->
                          <input class="form-control" name="icon_image" type="file"
                            @change="onFileChange($event, dataHeader.id, dataHeader.name, index, true)" />

                        </div>
                        <input type="text" class="inputtext" placeholder="Button Content" />
                        <div class="bottombg row">
                          <div class="col-9">
                            <h6>Change icon</h6>
                          </div>
                          <div class="col-3">
                            <img src="/images/admintrash.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footerbtn">
          <div class="checkbox">
            <input type="checkbox" id="checkbox" name="v" value="1" />
            <label for="checkbox" class="ms-3"> Show On Website </label><br />
          </div>
          <div class="btnarea">
            <button class="btntrnprt" type="reset">Reset</button>
            <button class="btnblue" type="submit">Save</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { handleHeaderSection, getTabsData, uploadImage,uploadHeaderImage } from '../../services/admin';
import { getImageUrl } from '../../helpers/imageHelper';

export default {
  data() {
    return {
      dataHeaders: [],
      // headerSection: [],
      headerSection: {
        button: {
          content: '',
          url: ''
        },
        logo: {
          name: ''
        },
        icon: {
          name: ''
        }
      },

    };
  },
  methods: {
    getImageUrl,
    async submitForm() {
      const formData = new FormData();

      // Loop through each header and append its data to formData

       formData.append(`headersButtonContent`,this.headerSection.button.content)
        formData.append(`headersButtonUrl`,this.headerSection.button.url);
        formData.append(`headersButtonId`,this.headerSection.button.id);
        formData.append(`headersIconId`,this.headerSection.icon.id);
        formData.append(`headersLogoId`, this.headerSection.logo.id);

      this.dataHeaders.forEach((header, index) => {
        formData.append(`headers[${index}][name]`, header.name);
        formData.append(`headers[${index}][slug]`, header.slug);
        formData.append(`headers[${index}][id]`, header.id);
        // Loop through subcategories if they exist
        if (header.subcategory && header.subcategory.length > 0) {
          header.subcategory.forEach((subcat, subIndex) => {
            formData.append(`headers[${index}][subcategory][${subIndex}][id]`, subcat.id);
            formData.append(`headers[${index}][subcategory][${subIndex}][name]`, subcat.name);
            formData.append(`headers[${index}][subcategory][${subIndex}][slug]`, subcat.slug);
          });
        }
      });

      try {
        const response = await handleHeaderSection(formData);

        if (response.status === 200) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: response.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          throw new Error(response.data.message || 'Something went wrong.');
        }
      } catch (error) {
        Swal.fire({
          text: error.message || 'Something went wrong.',
          icon: 'error',
        });
        console.error(error);
      }
    },

    async fetchHeaderSectionData() {
      try {
        const response = await getTabsData();
        this.dataHeaders = response.data.data.category;
        this.headerSection = response.data.data;
        console.log('asas', response.data.data);
        // console.log('sdsds',response.data.data);
      } catch (error) {
        console.error('Error fetching header section data:', error);
      }
    },



    async onFileChange(event, fileId, heading, index, isHeadSection = false, isSearchIcon = false) {
      const file = event.target.files[0];
      if (!file) return;


      // Prepare FormData with the necessary fields
      const formData = new FormData();
      formData.append('class_id', fileId);
      formData.append('heading', heading);
      formData.append('media_file', file); // Ensure 'icon_image' is the correct field name
      formData.append('isLogoImage', isHeadSection);
      formData.append('isSearchIcon', isSearchIcon);
      // console.log(file);
      // return;
      try {
        // Send the FormData to the server using an async function (assumed to be imported)
        const response = await uploadImage(formData);
        console.log('Upload Response:', response);

        // Update the corresponding UI section with the returned image URL
        if (isHeadSection && !isSearchIcon) {
          console.log('Updating Head Section Logo Image');
          this.headSections[index].logoImageUrl = response.data.imageUrl;
        } else if (isSearchIcon) {
          console.log('Updating Head Section Search Icon Image');
          this.headSections[index].searchIconUrl = response.data.imageUrl;
        } else {
          console.log('Updating Data Headers Icon Image');
          this.dataHeaders[index].iconImageUrl = response.data.imageUrl;
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        // Optionally, handle the error (e.g., show an alert)
      }
    },





async onFileChangeHeader(event,fileId, type) {
  const file = event.target.files[0];
      if (!file) return;


      // Prepare FormData with the necessary fields
      const formData = new FormData();
      formData.append('class_id', fileId);
      formData.append('media_file', file); 
      formData.append('type', type);
      // console.log(file);
      // return;
      try {
        // Send the FormData to the server using an async function (assumed to be imported)
        const response = await uploadHeaderImage(formData);
        console.log('Upload Response:', response);
      
      } catch (error) {
        console.error("Error uploading image:", error);
        // Optionally, handle the error (e.g., show an alert)
      }
}

  },

  mounted() {
    this.fetchHeaderSectionData();
  }
};
</script>







<style scoped>
.widthchange {
  width: 350px !important;
  height: 160px !important;
}

.bottomb {
  margin-top: 40px;
}

.btn-set {
  margin-top: 30px;
  margin-left: 0px !important;
}

.headbt button {
  color: #fff !important;
  border-radius: 5px;
  padding: 7px 20px !important;
  background: #04498c !important;
  border: #04498c !important;
}
</style>
