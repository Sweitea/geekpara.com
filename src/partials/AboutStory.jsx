import React from "react";

import AboutImage from "../images/about/2.jpg";
import AboutLogo from "../images/about-logo.png";

function AboutStory() {
  return (
    <section>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="max-w-3xl mx-auto">
            <h3 className="h3 mb-3">我们的故事</h3>
            <p className="text-lg text-gray-600 mb-8">
              极客学园的前身是衡中极客圈。
            </p>
            <p className="text-lg text-gray-600 mb-8">
              衡中极客圈成立于 2020 年 4
              月，我们创办的初衷，本是想聚一群衡水中学热爱计算机技术的同学，一起聊聊天，交流技术。靠着极客圈创立之初十几号人的推荐，极客圈有了第一批成员。在建群第二天，成员到了三十多人。还吸引来了一批信息奥赛的大佬们，他们大都成为了现今极客圈核心成员。
            </p>
          </div>

          <div className="sm:flex">
            <figure className="flex shrink-0 max-w-none sm:max-w-xs lg:max-w-none mb-8 sm:mb-0">
              <img
                className="grow self-start rounded"
                src={AboutImage}
                width="435"
                height="326"
                alt="About us 02"
              />
            </figure>
            <div className="sm:ml-8 lg:ml-16">
              <h4 className="h4 mb-2">2019 - 2021</h4>
              <p className="text-lg text-gray-600 mb-8">
                2021
                年年初，我们进行了一次大规模招新宣传。在招新过程中，也吸收了许多
                20
                级成员的加入。也是在过去的这一年，极客圈大群成员突破百人大关。我们还成立了核心成员团队，让有能力，爱团队的成员有更多施展才能的空间。极客圈建立了官网介绍站和招新宣传站，树立起极客圈新的对外形象。极客圈渐渐发展起来，力量也渐渐大了起来。
              </p>
              <div className="flex  mb-8">
                <img
                  className="rounded-full self-start shrink-0 shadow-lg mr-4"
                  src={AboutLogo}
                  width="40"
                  height="40"
                  alt="Logo"
                />
                <div>
                  <blockquote className="text-gray-600 italic">
                    “ I love this product and would recommend it to anyone.
                    Could be not easier to use, and our multiple websites are
                    wonderful. We get nice comments all the time. “
                  </blockquote>
                  <div className="text-sm font-medium text-gray-600 mt-2">
                    <cite className="text-gray-900 not-italic">
                      Micheal Osman
                    </cite>{" "}
                    ·{" "}
                    <a className="text-blue-600" href="#0">
                      New York Times
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              我们的影响力逐渐扩大，逐渐有外校极客同好希望加入我们，组织也变的更有包容能力。信息交流的广度不断扩展、角度更加多元，这极大的鼓舞了我们，让我们加快发展的脚步。所以，我们在
              2022 年 2
              月对组织进行改组，原“衡中极客圈”正式改为“极客学园”。我们用一个崭新的面貌迎接更多的热爱技术的同好们。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutStory;
