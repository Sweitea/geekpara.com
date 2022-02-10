import React from 'react';

import JupiterJun from '../images/member-avatar/jupiter-jun.png';
import NanakoMagic from '../images/member-avatar/nanako-magic.png';
import ChangGeng from '../images/member-avatar/chang-geng.png';
import Czz from '../images/member-avatar/czz.png';
import Hissin from '../images/member-avatar/hissin.png';
import JingYe from '../images/member-avatar/jing-ye.png';
import Powersix from '../images/member-avatar/powersix.png';
import YouXam from '../images/member-avatar/you-xam.png';

function Team() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2">GeekPara 团队背后的成员力量</h2>
          </div>

          {/* Team members */}
          <div className="max-w-sm sm:max-w-5xl mx-auto sm:flex sm:flex-wrap sm:justify-left -my-6 sm:-my-8 sm:-mx-3" data-aos-id-team>

            {/* Jupiter Jun */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={JupiterJun} width="120" height="120" alt="Jupiter Jun" />
                <h4 className="text-xl font-bold mb-1">Jupiter Jun</h4>
                <div className="text-blue-600 font-medium mb-2">创始人 & 创意总监</div>
                <p className="text-gray-600 text-center mb-3">航拍爱好者，一个 Node.js 厨，有时剪个片子。越来越看重边缘计算。喜欢用“头像”当头像。</p>
                {/* <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* Nanako Magic */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="150" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={NanakoMagic} width="120" height="120" alt="Nanako Magic" />
                <h4 className="text-xl font-bold mb-1">Nanako Magic</h4>
                <div className="text-blue-600 font-medium mb-2">首席工程师 & 核心成员</div>
                <p className="text-gray-600 text-center mb-3">c/go/rust，业余图形学，thatgame 社区工程师。偶尔画画作曲。由嘉然提供动力。</p>
                {/* <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* Czz */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="300" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={Czz} width="120" height="120" alt="Czz" />
                <h4 className="text-xl font-bold mb-1">Czz</h4>
                <div className="text-blue-600 font-medium mb-2">组长 & 核心成员</div>
                <p className="text-gray-600 text-center mb-3">擅长 Node.js 开发，音 Mad 制作，进行失败的化学实验，以及整活与摆烂。</p>
                {/* <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* Hissin' */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="450" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={Hissin} width="120" height="120" alt="Team member 05" />
                <h4 className="text-xl font-bold mb-1">Hissin'</h4>
                <div className="text-blue-600 font-medium mb-2">组长 & 核心成员</div>
                <p className="text-gray-600 text-center mb-3">熟练的 PHP 前端人，喜欢手写 CSS。拥有不少服务器，因此不向往云原生。</p>
                {/* <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* 长赓 */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="600" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={ChangGeng} width="120" height="120" alt="长赓" />
                <h4 className="text-xl font-bold mb-1">长赓</h4>
                <div className="text-blue-600 font-medium mb-2">核心成员</div>
                <p className="text-gray-600 text-center mb-3">克罗诺斯的继承者、朱斯提提亚的践行者、维斯特洛的唯一合法继承人、在试卷与题海中诞生的永恒之主。</p>
                {/* <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* 景晔 */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="750" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={JingYe} width="120" height="120" alt="景晔" />
                <h4 className="text-xl font-bold mb-1">景晔</h4>
                <div className="text-blue-600 font-medium mb-2">核心成员</div>
                <p className="text-gray-600 text-center mb-3">撰稿人，从事游戏社区运维、自媒体运营，有 Minecraft Spigot 服务端的维护与管理经验，熟练掌握相关插件应用学。</p>
                {/* <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* Powersix */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="900" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={Powersix} width="120" height="120" alt="Powersix" />
                <h4 className="text-xl font-bold mb-1">Powersix</h4>
                <div className="text-blue-600 font-medium mb-2">核心成员</div>
                <p className="text-gray-600 text-center mb-3">摸鱼大师，硬件开发，激光切割，3D 建模，PCB 设计。总之生活需要来点硬的。</p>
                {/* <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* YouXam */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="1050" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={YouXam} width="120" height="120" alt="YouXam" />
                <h4 className="text-xl font-bold mb-1">YouXam</h4>
                <div className="text-blue-600 font-medium mb-2">核心成员</div>
                <p className="text-gray-600 text-center mb-3">cpp/py/js/sql，前后端开发。午觉起床很晚，不知道写啥了捏。</p>
                {/* <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Team;