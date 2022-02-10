import React from 'react';
import { Link } from 'react-router-dom';

function CtaAlternative() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl" data-aos="zoom-y-out">

            <div className="flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
                <h3 className="h3 text-white">听起来我们正在建造一些很酷的东西？</h3>
              </div>

              {/* CTA button */}
              <div>
                <Link to="/form" className="btn text-white bg-blue-600 hover:bg-blue-700">立刻加入我们</Link>
                {/* @todo: 添加申请表单链接 */}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CtaAlternative;
