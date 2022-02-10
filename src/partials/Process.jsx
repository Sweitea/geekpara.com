import React from 'react';

function Process() {
  return (
    <section>
      <div id="join-process" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-16 border-t border-gray-200">

          {/* Items */}
          <div className="relative max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none">

            <div className="absolute top-1/2 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-300 hidden lg:block" aria-hidden="true"></div>

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="flex justify-center items-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold mb-3">1</div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">申请</h4>
              <p className="text-gray-600 text-center">你是否有加入我们的想法？点击下方横幅的按钮，立即开启申请流程。</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="flex justify-center items-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold mb-3">2</div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">问卷</h4>
              <p className="text-gray-600 text-center">您将会被引导至一份问卷，或者说是一份交互式自述。一切都是开放性的，尽管作答。</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="flex justify-center items-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold mb-3">3</div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">回访</h4>
              <p className="text-gray-600 text-center">我们看到您的自述后，会在第一时间通过其中的联系方式回访您，我们只是问一些问题。</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="flex justify-center items-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold mb-3">4</div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">摸鱼</h4>
              <p className="text-gray-600 text-center">审核期为两个小时左右。过审即代表你已加入极客学园，享受与我们一起划水的时光！</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Process;
