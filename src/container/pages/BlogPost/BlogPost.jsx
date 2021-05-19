import React, {Component,  Fragment} from 'react';
import Post from '../../../component/Post/Post';
import './BlogPost.css';
import axios from 'axios';

class BlogPost extends Component{
    
    state = {
        post : [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then((result) => {            
            this.setState({
                post: result.data
            })
        })
    }

    postDataToAPI = () =>{
        axios.post('http://localhost:3004/posts', this.state.formBlogPost).then((res) => {
            console.log(res)
            this.getPostAPI()
            this.setState({              
                formBlogPost:{
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            })
        }, (err) => {
            console.log('err', err)
        })
    }

    putDataToAPI = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then(res =>{
            console.log(res)
            this.getPostAPI()
            this.setState({
                isUpdate: false,
                formBlogPost:{
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            })
        })
    }

    handleRemove = (data) => {                
        axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
            this.getPostAPI()
        })
    }

    handleUpdate = (data) =>{        
        console.log(data)
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })        
    }

    handleSubmit = () =>{
        if (this.state.isUpdate) {
            this.putDataToAPI()           
        }else{
            this.postDataToAPI()
        }
        
    }

    handleFormChange = (event) => {        
        let formBlogPostNew = {...this.state.formBlogPost}
        let timestamp =  new Date().getTime()        
        if (!this.state.isUpdate) {
            formBlogPostNew['id'] = timestamp      
        }
        formBlogPostNew[event.target.name] = event.target.value        
        this.setState({
            formBlogPost: formBlogPostNew
        }, () =>{
            console.log('value obj form formBlogPost', this.state.formBlogPost)
        })
        
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`);
    }

    componentDidMount(){        
        this.getPostAPI()
    }

    render(){
        return(
            <Fragment>
            <p>Halaman BlogPost</p>
            <hr />
            <p className="section-title">Blog Post</p>
            <div className="form-add-post">
                <label htmlFor="title">Title</label>
                <input type="text" value={this.state.formBlogPost.title} name="title" placeholder="add title" onChange={this.handleFormChange}/>
                <label htmlFor="body">Blog Content</label>
                <textarea name="body" value={this.state.formBlogPost.body} id="body" cols="30" rows="10" placeholder="add blog content" onChange={this.handleFormChange}></textarea>
                <button className="btn-submit" onClick={this.handleSubmit}>Simpan </button>
            </div>
            {
                this.state.post.map(post => {
                    return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail}/>
                })
            }            
            </Fragment>
        )
    }
}


export default BlogPost;