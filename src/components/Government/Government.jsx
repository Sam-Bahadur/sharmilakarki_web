import React from "react";
import "./government.css";
import { BsFillXDiamondFill } from "react-icons/bs";

export default function Government() {
  return (
    <>
      <div className="government_container">
        <div className="government_content">
          <h2>
            <span>
              <BsFillXDiamondFill />
            </span>
            National Council Member – National Reconstruction Authority{" "}
          </h2>
          <h3>
            This council was formed after the Mega earthquake of 2072 B.S. by
            the GON to address all the issues concerning reconstruction after
            the earthquake. The council was chaired by Prime Minister.{" "}
          </h3>
        </div>
        <div className="government_content">
          <h2>
            <span>
              <BsFillXDiamondFill />
            </span>
            Recommended Committee Member – Truth and Reconciliation Commission
          </h2>
          <h3>
            This commission was established to investigate the facts about those
            involved in gross violations of human rights and crimes against
            humanity during the course of armed conflict and to create an
            environment of reconciliation in the society.
          </h3>
        </div>
        <div className="government_content">
          <h2>
            <span>
              <BsFillXDiamondFill />
            </span>
            Vice President – Nepal Red Cross Society Central Committee{" "}
          </h2>
          <h3>
            This appointment was given to Sharmila Karki to fulfill the
            objectives of her role in the organization as per the organizations
            mission and goal.
          </h3>
        </div>
        <div className="government_content">
          <h2>
            <span>
              <BsFillXDiamondFill />
            </span>
            Member of Advisory Committee – SAARC Submit (Ministry of Foreign
            Affairs){" "}
          </h2>
          <h3>
            The advisory committee was created by the Ministry of Foreign
            Affairs to analyze all the previous SAARC charters with the
            intention of providing valuable feedback to the government from the
            Civil society.
          </h3>
        </div>
      </div>
    </>
  );
}
