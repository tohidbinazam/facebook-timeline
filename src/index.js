import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import post from './components/Post';
import './index.css';
//Dom loading operations
document.addEventListener('DOMContentLoaded', show_posts);

// Create post from element
document.getElementById('create-post-form').addEventListener('submit', post.create_post);

// get post from server
export default function show_posts() {
  axios.get('http://localhost:5050/posts').then((res) => post.get_posts(res.data));
}
