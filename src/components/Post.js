import axios from 'axios';
import show_post from '../index';
import Alert from './Alert';

class Post extends Alert {
  constructor() {
    super();
    this.post_timeline = document.querySelector('.post-timeline-lode');
    this.msg = document.querySelector('.msg');
  }
  get_posts(data) {
    this.post_timeline.innerHTML = '';

    data.reverse().map((data, index) => {
      const { id, name, pro_photo, content, image } = data;

      this.post_timeline.innerHTML += `
            <div class="card shadow-sm my-3">
              <div class="card-body">
                <div class="post-header d-flex align-items-center justify-content-between">
                  <div class="post-header-left d-flex align-items-center">
                    <img class="me-2" src="${pro_photo}" alt="" />
                    <h5>${name}</h3>
                  </div>
                  <div class="post-header-right">
                    <button>...${index + 1}</button>
                  </div>
                </div>
                <div class="post-content mt-2">
                  <p>${content}</p>
                  <img src="${image}" alt="${id}" />
                </div>
              </div>
            </div>
        `;
    });
  }

  create_post(e) {
    e.preventDefault();

    // Get data by from data object
    let form_data = new FormData(e.target);
    let data = Object.fromEntries(form_data.entries());

    // send post request
    if (data.au_name == '' || data.profile_photo == '' || data.pt_content == '') {
      this.msg.innerHTML = this.alert('danger', 'All fields are required !');
    } else {
      axios
        .post('http://localhost:5050/posts', {
          id: '',
          name: data.au_name,
          pro_photo: data.profile_photo,
          content: data.pt_content,
          image: data.pt_image,
        })
        .then((res) => {
          show_post();
        });
    }
  }
}

let post = new Post();
export default post;
