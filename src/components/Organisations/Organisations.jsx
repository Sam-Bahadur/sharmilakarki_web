import React from "react";
import "./organisations.css";
import { GoOrganization } from "react-icons/go";
import { BsFillXDiamondFill } from "react-icons/bs";

export default function Organisations() {
  return (
    <div className="organisation_container">
      <div className="content_container">
        <div className="icon_color">
          <GoOrganization />
          <h3>Organisations Founded</h3>
        </div>
        <ol>
          <li>
            <span>
              <BsFillXDiamondFill />
            </span>
            <h4>Jagaran Nepal, Founding President </h4>
          </li>
          <h5>
            Jagaran Nepal works in the sector of women’s rights and specifically
            focuses on improving participation of women in politics and building
            leadership capabilities in women leaders of Nepal. The organization
            is also a leading advocacy group for women’s economic, cultural and
            social rights in Nepal.{" "}
          </h5>
          <li>
            <span>
              <BsFillXDiamondFill />
            </span>
            <h4>
              Women in Policy Advocacy Alliance (WIPPA), Founding National
              Coordinator{" "}
            </h4>
          </li>
          <h5>
            WIPPA is a nationwide umbrella alliance that actively advocates for
            policies that are related to the issues of women participation in
            Nepal
          </h5>
          <li>
            <span>
              <BsFillXDiamondFill />
            </span>
            <h4>
              Children, Women and human Rights (CWISH), Founding Vice President{" "}
            </h4>
          </li>
          <h5>
            CWISH works for the rights of Domestic Workers in Nepal. CWISH is a
            pioneer NGO in Nepal that worked to solve the issues faced by
            Domestic workers in the country
          </h5>
          <li>
            <span>
              <BsFillXDiamondFill />
            </span>
            <h4>
              South Asian Association of Poverty Eradication (SAAPE), Founding
              Member{" "}
            </h4>
          </li>
          <h5>
            SAAPE is an alliance of all the 8 regional south Asian countries
            that work to eradicate problems caused by poverty from a Human
            Rights perspective.{" "}
          </h5>
          <li>
            <span>
              <BsFillXDiamondFill />
            </span>
            <h4>TEWA, Founding Member </h4>
          </li>
          <h5>
            Organization funding grassroots Women’s right programming and
            advocacy.
          </h5>
          <li>
            <span>
              <BsFillXDiamondFill />
            </span>
            <h4>Sachetana, Founding Member</h4>
          </li>
          <h5>Organization working for gender awareness issues. </h5>
          <li>
            <span>
              <BsFillXDiamondFill />
            </span>
            <h4>Shani Ashram, Founding Member</h4>
          </li>
          <h5>
            Organization working on the issues pertaining to Senior Citizens.
          </h5>
          <li>
            <span>
              <BsFillXDiamondFill />
            </span>
            <h4>Shanti Malika, Founding Member</h4>
          </li>
          <h5>Women’s peace building networking group. </h5>
        </ol>
      </div>
    </div>
  );
}
