import React, { Component } from "react";
import "./Background.css";
import { Link } from "react-router-dom";
import cv from "../../../src/pdf/cv.pdf";

export default class Background extends Component {
  state = {
    readMore: true,
  };

  handleReadMore = () => {
    this.setState({
      readMore: !this.state.readMore,
    });
  };

  render() {
    const readMore = this.state.readMore ? (
      <>
        <div className="readless_animation"></div>
        <button onClick={this.handleReadMore}> read more... </button>
      </>
    ) : (
      <>
        <div className="readmore_animation">
          <p>
            From a young age, I had realized that a father’s (male figure)
            perspective needed to change if girls of this country were to have
            the same privileges that a boy was inherently given by his family.
            This realization lead me to choose a career path that would aid to
            transform the gender perspectives in our society.
          </p>
          <p>
            In our small village of Haunchur we lived in a joint family. I had 4
            grandfathers and 5 grandmothers. When I was young, Nepal was under
            the Rana regime. I remember one of my grandfather getting killed by
            the authoritarian Ranas. This was a difficult time in the history of
            Nepal. Even through such difficult times, my parents did their best
            to give us a good quality of life. Education was a top priority for
            my parents. When I was a child, I too wanted to go heard the goats
            and cows like other children in the villages. I too wanted to have
            fun playing and loitering around. But we were not allowed to do so.
            Education was always the top priority. In a place where good
            teachers were rare and there was no schooling infrastructure, my
            parents have done a wonderful job at educating me and my siblings.
            They would hire a teacher for the local school and allow them to
            live in our house so that the teacher could provide us with extra
            tuition apart from school hours. There was a lot of studying
            involved in my childhood and less fun compared to the other children
            in our village.{" "}
          </p>
          <p>
            I have to be honest and accept that my foundational education was
            not the best. Villages back then lacked teachers who were skilled at
            teaching Mathematics and English and other resources that would make
            for a better teaching environment but my parents did their level
            best. Till date, my struggle to grasp new content and express myself
            is not the best but I have learned to persevere. I have learnt that
            with hard work and consistent effort anything is possible. That is
            why, today I am able to compete in International platforms
            regardless of my background. If there is one thing that I want other
            people to learn from my life that would be the trait of
            perseverance.
          </p>
          <button onClick={this.handleReadMore}> show less </button>
        </div>
      </>
    );
    return (
      <>
        <div className="content-container">
          {/* <div className="container-content-heading">Background</div>
          <div className="ruler"></div> */}
          <div className="container-content-text">
            <p>
              Sharmila Karki is currently working as the Vice-President of Nepal
              Red Cross Society (ESTD. 1963) as a nominated appointee by the
              Cabinet of Nepal Government.
            </p>
            <p>
              Simultaneously, Karki also serves as a central committee member of
              All Nepal Women’s Association (ANWA). ANWA is an association of
              over 10 lakh Nepali women; which lobbies to formulate and
              implement progressive women friendly policies, develops programs
              to capacitate women from the rural grassroots to the national
              level and advocates for women’s economic, cultural and political
              rights.
            </p>
            <p>
              From 2011 to 2016, Karki served as the president of NGO Federation
              of Nepal; a nationwide federation of over 7000 NGOs. She was the
              first ever woman to be elected as the president of the federation
              which is a big milestone in the civil society movement of Nepal.
              During her time as the president, she played the role of an apex
              civil society leader for issues concerning development, human
              rights, institutionalization of democracy and advocacy of people’s
              agendas amongst the top leaders of Nepal, different political
              parties and all the other concerned Bilateral and Multilateral
              organizations. Furthermore, during her tenure NGO Federation of
              Nepal, for the first time produced a nationwide development report
              that covered all development and human right issues, lead the
              historic 2014 People’s SAARC and continuously built awareness
              about MDGs from the grassroots levels to United Nations until the
              declaration of SDGs.
            </p>
            <p>
              Karki is also the founding president of Jagaran Nepal; an NGO that
              mainly advocates for women’s participation in politics. Her work
              through Jagaran Nepal and other alliances that lobby for women’s
              participation made an historic achievement by ensuring a minimum
              of 33% women participation in all levels of state mechanism as
              promulgated in the constitution of Nepal. During her tenure at
              Jagaran Nepal, Karki helped capacitate over 10,000 women political
              leaders from different political parties.
            </p>
            <p>
              Throughout her professional career, Karki has had the privilege of
              serving as nominated member in different government committees
              formed by the cabinet of Nepal government. She was recognized as
              one of the 100 most influential international human rights
              activist by the Synergos Foundation and a transformative leader in
              the sector of women political participation by the Feminist Tax
              Force.
            </p>
            <p>
              Karki is currently pursuing her PhD in “Impact of Culture in Women
              Leadership” from Tribhuwan University.
            </p>
          </div>
          <div className="button_container">
            <div className="background_buttons">
              <Link to="/aboutme/politicaljourney"> Political Journey</Link>
            </div>
            <div className="background_buttons">
              <Link to="/aboutme/gvtappointments"> Government Appointment</Link>
            </div>
            <div className="background_buttons">
              <a
                href={cv}
                target="_blank"
                //  download="CV_sharmila" -> for direct download
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
        <div className="content-container">
          <div className="container-content-heading">Personal Journey</div>
          <div className="ruler"></div>
          <div className="container-content-text">
            <p>
              I was born in Khotang, a remote district in the Eastern region of
              Nepal. For the longest time my birth place lacked basic
              infrastructures such as roads, electricity, schools etc. Only in
              recent years Khotang has gotten access to such basic
              infrastructures.
            </p>
            <p>
              {" "}
              When I was growing up, my village as well as other surrounding
              villages did not have a High School. If someone wanted to continue
              their education after the 7th grade they had to leave their homes
              and go to other well-off parts of the country. In a patriarchal
              society like ours, girls leaving their homes for education was
              unheard of. The only reason a girl was allowed to leave their
              homes was when they were married and had to go to their husband’s
              home. Conversely, it was just the opposite for boys. Boys who
              showed interest in studies were motivated and financially
              supported by their families to continue their education in other
              parts of the country. Due to such social circumstance majority of
              the girls in Khotang did not get a chance to participate in higher
              education.
            </p>
            <p>
              However, I consider myself to be lucky as I was allowed to leave
              my home to pursue higher education in Jhapa. My parents,
              especially my father, was different from the rest. He was a
              maverick who believed that both his sons and daughters,
              irrespective of their gender, should have equal opportunity to get
              quality education. His belief was challenged by many neighboring
              orthodox villagers who tried to discourage him from allowing his
              daughters to leave their home and seek education in another place.
              Nonetheless, he did not change his mind. I vividly remember an
              instance where my father defended my right to quality education by
              trying to convince one of his peers by stating that Indira Gandhi,
              the then Prime Minister of India is also a daughter of somebody.
              He explained to him that his daughters are equally capable as his
              sons and educational opportunities will open doors for the
              daughters of Nepal to reach the height that Indira Gandhi has in
              this world. I was only six when my father said this.
            </p>
            {readMore}
            {/* 
                        </div> */}
          </div>
        </div>
      </>
    );
  }
}
