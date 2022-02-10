import React from 'react';

import TeamImage01 from '../images/team-mosaic-01.jpg';
import TeamImage02 from '../images/team-mosaic-02.jpg';
import TeamImage03 from '../images/team-mosaic-03.jpg';
import TeamImage04 from '../images/team-mosaic-04.jpg';
import Logo from "../images/logo.png";

function Career() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">GeekPara 仍在成长，与我们一同成长</h2>
            <p className="text-xl text-gray-600">
              莲池粼粼，太行巍巍。观夫赤县神州，惟吾侪极客少年，风云际会。顺乎时代潮流，承乎天赋异禀，潜心钻研，矢志创新，筚路蓝缕，建功立业。
                </p>
          </div>

          {/* Team images */}
          <div className="max-w-3xl mx-auto">
            <div className="pb-12 md:pb-20">
              <div className="relative w-full h-0 pb-3/4">
                <figure className="absolute h-auto" style={{ bottom: '9%', width: '41.7%', maxWidth: '320px' }} data-aos="fade-right">
                  <img className="shadow-2xl" src={TeamImage03} width="320" height="240" alt="Team mosaic 03" />
                </figure>
                <figure className="absolute" style={{ left: '14.8%', top: '11.8%', width: '70.3%', maxWidth: '540px' }} data-aos="fade-down" data-aos-delay="150">
                  <img className="shadow-2xl" src={TeamImage01} width="540" height="360" alt="Team mosaic 01" />
                </figure>
                <figure className="absolute h-auto" style={{ bottom: '0', right: '6.2%', width: '41.7%', maxWidth: '320px' }} data-aos="fade-left" data-aos-delay="300">
                  <img className="shadow-2xl" src={TeamImage02} width="320" height="240" alt="Team mosaic 02" />
                </figure>
                <figure className="absolute h-auto" style={{ top: '5.9%', right: '0', width: '23.4%', maxWidth: '180px' }} data-aos="zoom-y-out" data-aos-delay="450">
                  <img className="shadow-2xl" src={TeamImage04} width="180" height="180" alt="Team mosaic 04" />
                </figure>
                <img src={Logo} width="100" className="relative mx-auto h-auto rounded-full shadow-2xl"/>
              </div>
            </div>
          </div>

          {/* Job list */}
          <div className="max-w-3xl mx-auto">

            <h3 className="h4 mb-8">大事件</h3>

            <div className="-my-3">

              {/* 1st Item */}
              <a className="flex justify-between items-center p-4 rounded border border-gray-200 transition duration-300 ease-in-out bg-gray-100 shadow-md hover:bg-white hover:shadow-lg mb-3" href="#0">
                <div className="font-medium">GeekPara（极客学园）重制及改组公告</div>
                <svg className="w-4 h-4 fill-current text-blue-600 shrink-0 ml-6" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.707 1h-8v2h5.586L1 13.293l1.414 1.414L12.707 4.414V10h2V2a1 1 0 00-1-1z" />
                </svg>
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Career;