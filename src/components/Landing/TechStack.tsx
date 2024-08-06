import Marquee from "react-fast-marquee";
import React from "react";
import TechIcon from "./TechIcon";

type Props = {};

export default function TechStack({}: Props) {
  return (
    <div className="bg-btnbg flex flex-col space-y-6 min-h-screen justify-center py-16">
      <div className="flex flex-col lg:flex-row justify-around items-center space-y-8 py-6">
        <h3 className="w-[85%] lg:w-[30%] text-white font-bold text-4xl lg:text-5xl">
          Some of the Tech Stacks Experts We have
        </h3>
        <p className="w-[85%] lg:w-[40%] text-white">
          At Lancer Planet, we have remote software developers for a wide range of
          tech stacks. We can surely find the right fit for you!
        </p>
      </div>

      <Marquee className="flex items-center" pauseOnHover speed={80}>
        <TechIcon data={{ title: "Web", imgUrl: "/assets/techs/web.svg" }} />
        <TechIcon
          data={{ title: "Graphql", imgUrl: "/assets/techs/graphql.svg" }}
        />
        <TechIcon
          data={{ title: "Python", imgUrl: "/assets/techs/python.svg" }}
        />
        <TechIcon
          data={{ title: "Nodejs", imgUrl: "/assets/techs/nodejs.svg" }}
        />
        <TechIcon
          data={{ title: "Full Stack", imgUrl: "/assets/techs/stack.svg" }}
        />
        <TechIcon data={{ title: "Java", imgUrl: "/assets/techs/java.svg" }} />
        <TechIcon data={{ title: "iOS", imgUrl: "/assets/techs/ios.svg" }} />
        <TechIcon data={{ title: "php", imgUrl: "/assets/techs/php.svg" }} />
        <TechIcon
          data={{ title: "QA Engineer", imgUrl: "/assets/techs/qa.svg" }}
        />
        <TechIcon
          data={{ title: "Angular", imgUrl: "/assets/techs/angular.svg" }}
        />

        <TechIcon
          data={{ title: "Swift", imgUrl: "/assets/techs/swift.svg" }}
        />
        <TechIcon
          data={{ title: "Backend", imgUrl: "/assets/techs/backend.svg" }}
        />
      </Marquee>

      <Marquee className="flex items-center" pauseOnHover speed={100}>
        <TechIcon data={{ title: "App", imgUrl: "/assets/techs/mobile.svg" }} />
        <TechIcon
          data={{ title: "Devops", imgUrl: "/assets/techs/devops.svg" }}
        />
        <TechIcon
          data={{ title: ".Net", imgUrl: "/assets/techs/dot-net.svg" }}
        />
        <TechIcon
          data={{ title: "Blockchain", imgUrl: "/assets/techs/blockchain.svg" }}
        />

        <TechIcon
          data={{ title: "Angular", imgUrl: "/assets/techs/angular.svg" }}
        />

        <TechIcon
          data={{ title: "Swift", imgUrl: "/assets/techs/swift.svg" }}
        />
        <TechIcon
          data={{ title: "Backend", imgUrl: "/assets/techs/backend.svg" }}
        />
        <TechIcon
          data={{ title: "Front End", imgUrl: "/assets/techs/front-end.svg" }}
        />
        <TechIcon
          data={{ title: "React js", imgUrl: "/assets/techs/reactjs.svg" }}
        />
        <TechIcon
          data={{
            title: "React Native",
            imgUrl: "/assets/techs/react-native.svg",
          }}
        />
      </Marquee>
      <Marquee className="flex items-center" pauseOnHover speed={90}>
        <TechIcon
          data={{ title: "Full Stack", imgUrl: "/assets/techs/stack.svg" }}
        />
        <TechIcon data={{ title: "Java", imgUrl: "/assets/techs/java.svg" }} />
        <TechIcon data={{ title: "iOS", imgUrl: "/assets/techs/ios.svg" }} />
        <TechIcon data={{ title: "php", imgUrl: "/assets/techs/php.svg" }} />
        <TechIcon
          data={{ title: "QA Engineer", imgUrl: "/assets/techs/qa.svg" }}
        />
        <TechIcon
          data={{ title: "Android", imgUrl: "/assets/techs/android.svg" }}
        />
        <TechIcon
          data={{ title: "Blockchain", imgUrl: "/assets/techs/blockchain.svg" }}
        />
        <TechIcon
          data={{ title: "Front End", imgUrl: "/assets/techs/front-end.svg" }}
        />
        <TechIcon
          data={{ title: "React js", imgUrl: "/assets/techs/reactjs.svg" }}
        />
        <TechIcon
          data={{
            title: "React Native",
            imgUrl: "/assets/techs/react-native.svg",
          }}
        />
        <TechIcon
          data={{ title: "Ruby on Rails", imgUrl: "/assets/techs/ruby.svg" }}
        />
      </Marquee>
      <div className="mx-auto ">
        <button className="mt-12 bg-white bg-opacity-20 px-6 py-3 rounded-lg text-white hover:text-herobg secondaryBtn hover:bg-opacity-90">
          Find talent
        </button>
      </div>
    </div>
  );
}
