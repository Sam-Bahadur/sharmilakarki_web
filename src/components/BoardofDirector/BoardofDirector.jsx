import React from "react";
import { MdWork } from "react-icons/md";
import "./boardofdirector.css";
import { BsFillXDiamondFill } from "react-icons/bs";

export default function BoardofDirector() {
  return (
    <div className="bod_container">
      <div className="content_container">
        <div className="icon_color">
          <MdWork />
          <h3>Served as Board of Directors for</h3>
        </div>
        <ul>
          <li>
            <span>
              <BsFillXDiamondFill />
            </span>
            <h4>NGO Federation of Nepal, Immediate Past-President </h4>
          </li>
          <h5>
            This is a National Federation of NGOs with 7000 member organizations
            from all over Nepal. NGO Federation is one of its kind, as the
            majority of other federations in Nepal are issue based federations
            that are coordinated by NGO Federation. Thus, NGO Federation in
            practice is a Confederation. Since, its establishment it has been
            dealing with people’s issues and has set a bench-mark for Human
            Rights, Democracy and Governance in Nepal. I was the first women
            Secretary General and President of the organization in its history
            of two decades.
          </h5>
          <li>
            <span>
              <BsFillXDiamondFill />
            </span>
            <h4>People’s SAARC, Core Committee Member </h4>
          </li>
          <h5>
            This is an important South Asian network which works to pressurize
            and advocate to the SAARC secretariats. The network works to push
            forward the people’s issues from the grass root level and raise the
            voice of voiceless so that their respective governments can hear
            their people’s agenda. This is specifically done by organizing
            international forum before the official SAARC in the host country.
            In 2014, I had the privilege to lead the historic 2014 People’s
            SAARC submit in Nepal as a coordinator for all 8 SAARC countries.
          </h5>
          <li>
            <span>
              <BsFillXDiamondFill />
            </span>
            <h4>President, Asian Pacific Movement on Debt and Development </h4>
          </li>
          <h5>
            This organization works all over Asia Pacific Region on the issues
            of Climate change, Debt and Development, Tax justice, Energy and
            Cole Elicit Financial Flow etc. Karki was the first women president
            of the organization.
          </h5>
          <li>
            <span>
              <BsFillXDiamondFill />
            </span>
            <h4>Vice-President, Nepal Red Cross Society </h4>
          </li>
          <h5>
            Nepal Red Cross Society diligently works to help the community
            continuously in different humanitarian issues that includes but is
            not limited to natural disaster management, blood donation and
            distribution etc. The organization works closely with ICRC and IFRC
            in issues that are related to humanitarian law and gender justice.
          </h5>
        </ul>
      </div>
    </div>
  );
}
