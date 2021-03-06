import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch } from 'react-router-dom';

class Blog extends Component {




    render() {


        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/' exact>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={()=><h1>Home</h1>}/> */}
                <Switch>
                    <Route path='/' exact component={Posts} />
                    <Route path='/new-post' component={NewPost} />
                    <Route path='/:id' exact component={FullPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;