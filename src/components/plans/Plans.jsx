import React from "react";
import "./plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="Plans-container" id="Plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="program-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">Ready to start </span>
        <span>Your Journey</span>
        <span className="stroke-text">With Us</span>
      </div>

      {/* Plans Card */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="tick" />{" "}
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See More Benefits -&gt; </span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
