import React from 'react';
import CountUp from 'react-countup';
const ExtraSectionOne = () => {
    return (
        <div data-aos="zoom-out-down" className="border rounded-full border-green-400 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          <div className="text-center">
            <h6 className="text-3xl font-bold text-green-500">
            <CountUp end={100} />K
            </h6>
            <p className="font-bold">Downloads</p>
          </div>
          <div className="text-center">
            <h6 className="text-3xl font-bold text-green-500">
            <CountUp end={99} />K
            </h6>
            <p className="font-bold">Users</p>
          </div>
          <div className="text-center">
            <h6 className="text-3xl font-bold text-green-500">
            <CountUp end={50} />K
            </h6>
            <p className="font-bold">Subscribers</p>
          </div>
          <div className="text-center">
            <h6 className="text-3xl font-bold text-green-500">
            <CountUp start={0} end={99} delay={0}>
  {({ countUpRef }) => (
    <div>
      <span ref={countUpRef} />K
    </div>
  )}
</CountUp>
            </h6>
            <p className="font-bold">Cookies</p>
          </div>
        </div>
      </div>
    );
};

export default ExtraSectionOne;