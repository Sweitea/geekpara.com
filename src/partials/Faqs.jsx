import React from 'react';
import Accordion from '../utils/Accordion';

function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-10">
            <h2 className="h2">你可能会问的问题</h2>
          </div>

          {/* Faqs */}
          <ul className="max-w-3xl mx-auto pl-12">
            
            <Accordion title="组织对于成员有没有地域限制？">
              不，完全没有。虽然我们的成员基群是河北的一群学生，但伴随着组织的不断发展，我们欢迎来自全国的青少年极客加入我们！
            </Accordion>
            <Accordion title="这是个兴趣组织还是盈利组织？">
              我们是兴趣组织。极客学园不会以任何方式盈利，所做的项目和对外提供的服务都是用爱发电。GeekPara 只是为广大青少年极客提供一个交流的平台。
            </Accordion>
            <Accordion title="我是否必须参与某些项目？">
              完全不需要，我们的加入条件里不限制成员的活动和活动方式。GeekPara 是一个青少年极客组织，而目前的产品和项目都是社区内一些成员自发活动的产物。
            </Accordion>
            <Accordion title="我必须要具有编程知识吗？"  active>
              当然不！极客学园是一个兼容并包、话题多元的社区，我们接受任何合理的兴趣方向。除了开发之外，仍有很大部分空间给予硬件、摄影、数码、影视、作曲、原画等方向。如果这是你最后的担忧，那么你现在可以尽管放心地按下申请按钮。
            </Accordion>
            <span className="block border-t border-gray-200" aria-hidden="true"></span>
          </ul >

        </div >
      </div >
    </section >
  );
}

export default Faqs;
