import React from "react";
import { Link } from 'react-router-dom';
/* ***IMPORTANT NOTES
 *For in this page.
  *Title
  *description of the idea.
  *Prototype may be video or links.
    *--> Decrease the load own servers user should provide links of the app through thier personal drives links or website links they created.
    *They show the video of the Prototype from thier mail ids directly. redirects mail id or post Video on youtube for decrease load on own servers.
*/
/**
 * *back   title   profile
 * *Problem statement
 * *Approach
 * *uniqueness
 * *Description
 * *Prototype
 * *support type
 * *support button
 */
import { BiArrowBack } from 'react-icons/bi';
const IdeaDescription = () => {
    return (
        <div className="bg-white-200 ">
            <div className="flex justify-between mx-10">
                <div className="w-10 h-10">
                    <BiArrowBack />
                </div>
                <div className="text-xl font-semibold  ">
                    <p>Sustainable Nature</p>
                </div>
                <div className="desc-profile">
                    <img src="https://source.unsplash.com/400x400/?man" alt="profile" className="w-9 h-9" />
                </div>
            </div>


            <div className="mx-20 shadow-md my-10">
                <div className="text-xl ml-5 ">
                    <div className="ps_header">
                        <p>Problem Statement</p>
                    </div>
                    <div className="ps_content">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur illum eveniet nihil beatae voluptatibus minima, quis, earum repellendus temporibus voluptate voluptatem animi deserunt, iusto soluta recusandae quam incidunt amet facere.
                    </div>
                </div>

                <div className="text-xl ml-5">
                    <div className="unique_header">
                        <p>Uniqueness</p>
                    </div>
                    <div className="unique_content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam saepe ratione voluptates debitis sequi omnis numquam incidunt excepturi fugiat aliquam possimus eius iure, inventore non magnam voluptatem voluptatum facere dolor!</p>
                    </div>
                </div>

                <div className="text-xl ml-5">
                    <div className="approach_header">
                        <p>Your Approach</p>
                    </div>
                    <div className="approach_content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, deleniti aut? Veritatis, at laboriosam? Dolores adipisci at cupiditate, veritatis, pariatur illum ratione molestiae numquam, optio aspernatur minima vel. Nemo, ullam.</p>
                    </div>
                </div>

                <div className="text-xl ml-5">
                    <div className="desc_body_description">
                        <p>Description</p>
                    </div>
                    <div className="desc_matter">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellendus delectus exercitationem nihil magni quasi minima quisquam aliquam quasi, cumque odio.</p>
                    </div>
                </div>

                <div className="text-xl ml-5">
                    <div className="support_header">
                        <p>Support Type</p>
                    </div>
                    <div className="support_desc">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat consectetur vero saepe nisi? Iusto voluptatum voluptates porro quis, voluptatem nobis!</p>
                    </div>
                </div>

                <div className="text-xl ml-5">
                    <div className="prototype_header">
                        <p>Prototype</p>
                    </div>
                    <div className="prototype_ref">
                        <a href="https://youtu.be/GvQ4gytBAoA?si=aGJHAWUl71g7IKug" target='_blank' className="text-underline text-orange-600">Click here to view Prototype</a>
                    </div>
                </div>

                <div className="flex justify-center ">
                    <button className=" px-2 py-2 bg-black text-white">Support Idea</button>
                </div>
            </div>

        </div>
    )
};
export default IdeaDescription;