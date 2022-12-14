import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { Like } from '../../Assets/Images/Images';
import { tags } from '../../Assets/Link';
import Carousel from '../../Components/Carousel';
import Comments from '../../Components/Comments';
import PostComment from '../../Components/PostComment/PostComment';
import Reaction from '../../Components/Reaction/Reaction';
import LikeReaction from '../../Components/ReactionList';
import { findDays } from '../../Utils/Helpers';
import './index.css';
function PostModal({ setPersonalPostRef, data }) {
    const modalRef = useRef();
    useEffect(() => {
        setPersonalPostRef(modalRef);
    })
    const [count, setCount] = useState(data._count)
    const [show, setShow] = useState(false);
    const [commentBoxRef, setCommentBoxRef] = useState();
    const setRef = (e) => {
        setCommentBoxRef(e.current);
    }
    const checkModalOrNot = (e) => {
        if (e.target.className === 'modal') {
            modalRef.current.style.display = 'none'
        }
    }
    return (
        <div className='modal' ref={modalRef} onClick={checkModalOrNot}>
            <div className='modal-content modalFlex sm-hide' style={{ height: "70%" }}>
                {data.data.length === 1 ? <img src={data.data[0].data} style={{ width: "50%", objectFit: "contain" }} /> : <Carousel dataSlider={data.data} />}
                <div className='d-flex flex-column' style={{ overflow: "scroll", width: "100%",paddingRight:"10px" }}>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center justify-content-start gap-5 p-2' style={{ background: "white", position: "sticky", top: "0px" }}>
                            <img src={data.userpost.profilepic} style={{ maxWidth: "40px" }} />
                            <div className='d-flex flex-column'>
                                <p className='makeBold'>{data.userpost.firstName}</p>
                                <div className='d-flex'>
                                    {data.userpost.companys.length == 0 ? <></> :
                                        <div className='smallText'>{data.userpost.companys[0].position} at {data.userpost.companys[0].company.name}||</div>}
                                    <span className='smallText followers' >{data.followers} Followers</span></div>

                                <p className='d-flex gap-2 smallText grey'>
                                    {findDays(data.createdAt)}days ago
                                    <span>&bull;</span>
                                    <span><img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664716461/world_hwygvt.svg" /></span>
                                </p>
                            </div>
                        </div>
                        <Link to='' className='d-flex' style={{ marginRight: "10px" }}>
                            <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264181/Add_mh0lce.svg" />
                            <div>Follow</div>
                        </Link>
                    </div>
                    <div className='mt-2 p-2'>
                        <h3 className='mb-1'>{data.title}</h3>
                        <p className='grey'>{data.description}</p>
                    </div>
                    <div className='tags d-flex flex-row gap-1' style={{ flexWrap: "wrap", marginTop: "30px" }}>
                        {
                            data.hashtag.map(e => {
                                return <Link to='/' style={{ marginLeft: "10px" }}>#{e.tag}</Link>
                            })
                        }
                    </div>
                    <div className='comments' style={{ margin: "20px 10px" }}>
                        <PostComment data={count} />

                    </div>
                    <div className='vr'></div>
                    <div className='d-flex justify-content-between p-2' style={{ margin: "10px" }}>
                        <div style={{ position: "relative" }} className="likeReaction">
                            <LikeReaction postId={data.id} setCount={setCount} />
                            <div className='d-flex flex-row gap-2'>
                                <Like /><span>Like</span>
                            </div>
                        </div>
                        <div onClick={() => { setShow(true); commentBoxRef.focus() }}>
                            <Reaction src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264182/Comment_g6srr8.svg" name="Comment" className="sm-show comment" />
                        </div>
                        <Reaction src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264189/Share_nhixhn.svg" name="Share" className="sm-show share" />
                        <Reaction src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264189/send_dngnfl.svg" name="Send" className="sm-hide send" />
                    </div>
                    <div className="show" style={{ margin: "15px" }}>
                        <Comments getRef={setRef} />
                    </div>
                </div>
            </div>
            <div className='lg-hide sm-show modal-content' style={{ width: "100%", margin: "0px" }}>
                <img src={data.postUrl} style={{ maxWidth: "100%" }} />
                <div className='d-flex flex-column' style={{ overflow: "scroll" }}>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center justify-content-start gap-5 p-2' style={{ background: "white", position: "sticky", top: "0px" }}>
                            <img src={data.userpost.profilepic} style={{ maxWidth: "40px" }} />
                            <div className='d-flex flex-column gap-1'>
                                <p className='makeBold'>{data.userpost.firstName}</p>
                                <p className='grey smallText'>{data.followers} Followers</p>
                                <p className='d-flex gap-2 smallText grey'>
                                    {data.daysAgo}
                                    <span>&bull;</span>
                                    <span><img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664716461/world_hwygvt.svg" /></span>
                                </p>
                            </div>
                        </div>
                        <Link to='' className='d-flex' style={{ marginRight: "10px" }}>
                            <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264181/Add_mh0lce.svg" />
                            <div>Follow</div>
                        </Link>
                    </div>
                    <div className='mt-2 p-2'>
                        <h3 className='mb-1'>{data.description.heading}</h3>
                        <p className='grey'>{data.description.description}</p>
                    </div>
                    <div className='tags d-flex flex-row gap-1' style={{ flexWrap: "wrap", marginTop: "30px" }}>
                        {
                            tags.map(e => {
                                return <Link to='/' style={{ marginLeft: "10px" }}>{e}</Link>
                            })
                        }
                    </div>
                    <div className='comments' style={{ margin: "20px 10px" }}>
                        <PostComment data={data._count} />

                    </div>
                    <div className='vr'></div>
                    <div className='d-flex justify-content-between p-2' style={{ margin: "10px" }}>
                        <div style={{ position: "relative" }} className="likeReaction">
                            <LikeReaction />
                            <Reaction src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264185/Like_n7mv3a.svg" name="Like" className="sm-show like" />
                        </div>
                        <div onClick={() => { setShow(true); commentBoxRef.focus() }}>
                            <Reaction src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264182/Comment_g6srr8.svg" name="Comment" className="sm-show comment" />
                        </div>
                        <Reaction src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264189/Share_nhixhn.svg" name="Share" className="sm-show share" />
                        <Reaction src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264189/send_dngnfl.svg" name="Send" className="sm-hide send" />
                    </div>
                    <div className="show" style={{ margin: "15px" }}>
                        <Comments getRef={setRef} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostModal