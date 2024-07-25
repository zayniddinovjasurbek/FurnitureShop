import React from 'react'
import './Blog.css'
import { IoIosArrowForward } from "react-icons/io";
import { assets, blog_imgs, blog_right_data } from '../../assets/assets';
import { NavLink } from'react-router-dom';

import { FaUser, FaCalendar, FaTag} from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Blog = () => {
  return (
    <div className='blog'>
      <div className="title">
            <img src={assets.logo_img} alt="" />
            <h1>Blog</h1>
            <div className="link">
                <h3><NavLink to='/'>Home</NavLink> <IoIosArrowForward /> <NavLink to='/blog'>Contact</NavLink></h3>
            </div>
        </div>

        <div className="blog-container">
            <div className="blog-left-container">
                <div className="blog-news">
                    <img src={blog_imgs.blog_left_img1} alt="" />
                    <div className="blog-icons">
                        <div className="admin">
                            <FaUser />
                            <span>Admin</span>
                        </div>
                        <div className="date">
                            <FaCalendar />
                            <span>14 Oct 2022</span>
                        </div>
                        <div className="comments">
                            <FaTag />
                            <span>Wood</span>
                        </div>
                    </div>
                        <h1>Going all-in with millennial design</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore 
                            et <br />dolore mag aliqua. Mus mauris vitae 
                            ultricies leo integer malesuada nunc. In nulla 
                            posuere sollicitudin <br />aliquam ultrices. 
                            Morbi blandit cursus risus at ulices mi tempus 
                            impediet. Libero enim sed faibus turpis <br />
                            in. Curus matis moletie a iaclis at erat. Nibh 
                            cras pulinar mattis nunc sed blndit libero. 
                            Pellentesque elit <br />ullamcorper dignissim 
                            cras tincidunt. Pharetra et ultrices neque ornare 
                            aenean euismod elementum.</p>
                        <a href="#">Read more</a>
                </div>

                <div className="blog-news">
                    <img src={blog_imgs.blog_left_img2} alt="" />
                    <div className="blog-icons">
                        <div className="admin">
                            <FaUser />
                            <span>Admin</span>
                        </div>
                        <div className="date">
                            <FaCalendar />
                            <span>14 Oct 2022</span>
                        </div>
                        <div className="comments">
                            <FaTag />
                            <span>Wood</span>
                        </div>
                    </div>
                        <h1>Going all-in with millennial design</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore 
                            et <br />dolore mag aliqua. Mus mauris vitae 
                            ultricies leo integer malesuada nunc. In nulla 
                            posuere sollicitudin <br />aliquam ultrices. 
                            Morbi blandit cursus risus at ulices mi tempus 
                            impediet. Libero enim sed faibus turpis <br />
                            in. Curus matis moletie a iaclis at erat. Nibh 
                            cras pulinar mattis nunc sed blndit libero. 
                            Pellentesque elit <br />ullamcorper dignissim 
                            cras tincidunt. Pharetra et ultrices neque ornare 
                            aenean euismod elementum.</p>
                        <a href="#">Read more</a>
                </div>

                <div className="blog-news">
                    <img src={blog_imgs.blog_left_img3} alt="" />
                    <div className="blog-icons">
                        <div className="admin">
                            <FaUser />
                            <span>Admin</span>
                        </div>
                        <div className="date">
                            <FaCalendar />
                            <span>14 Oct 2022</span>
                        </div>
                        <div className="comments">
                            <FaTag />
                            <span>Wood</span>
                        </div>
                    </div>
                        <h1>Going all-in with millennial design</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore 
                            et <br />dolore mag aliqua. Mus mauris vitae 
                            ultricies leo integer malesuada nunc. In nulla 
                            posuere sollicitudin <br />aliquam ultrices. 
                            Morbi blandit cursus risus at ulices mi tempus 
                            impediet. Libero enim sed faibus turpis <br />
                            in. Curus matis moletie a iaclis at erat. Nibh 
                            cras pulinar mattis nunc sed blndit libero. 
                            Pellentesque elit <br />ullamcorper dignissim 
                            cras tincidunt. Pharetra et ultrices neque ornare 
                            aenean euismod elementum.</p>
                        <a href="#">Read more</a>
                </div>
            </div>

            <div className="blog-right-container">
                <div className="input">
                    <input type="text" />
                    <i><IoSearch /></i>
                </div>
                <div className="blog-categories">
                    <h1>Categories</h1>
                    <div className="blog-category">
                        <div className="crafts cate">
                            <span>Crafts</span>
                            <span>2</span>
                        </div>
                        <div className="design cate">
                            <span>Design</span>
                            <span>8</span>
                        </div>
                        <div className="handmade cate">
                            <span>Handmade</span>
                            <span>7</span>
                        </div>
                        <div className="interior cate">
                            <span>Interior</span>
                            <span>1</span>
                        </div>
                        <div className="wood cate">
                            <span>Wood</span>
                            <span>6</span>
                        </div>
                    </div>
                </div>
                <div className="blog-posts">
                    <h1>Recent Posts</h1>
                    <div className="blog-post">
                    {blog_right_data.map((post, index) => {
                        return (
                                <div key={index} className="blog-post-con">
                                    <img src={post.image} alt="" />
                                    <div className="text">
                                        <h3>{post.title}</h3>
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                        )
                    })}
                    </div>

                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog
