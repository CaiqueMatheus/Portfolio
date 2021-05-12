import styles from "./working.module.scss";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

type Member = {
  nickname: string;
  photo: string;
};

type WorkingCard = {
  projectName: string;
  platform: string;
  technologies: string[];
  members: Member[];
  progress: string;
  timeEstimated: string;
  leftTime: string;
  public: boolean;
};

export default function Working() {
  return (
    <div className="col-span-2 row-span-2 bg-gray-500 rounded-lg p-4 mt-4 shadow-md h-auto font-varela ">
      <div className="flex flex-row justify-between">
        <div>
          <h2 className="text-gray-200 font-archivo font-normal leading-none">
            Project Name
          </h2>
          <h3 className="text-violet text-xs">Mobile & Desktop</h3>
        </div>
        <div className="text-center bg-gray-200 rounded-sm text-xs p-1 hover:bg-gray-300 leading-none">
          <Link href="https://github.com/caiqueazevedo">
            <a target="_blank">
              <FontAwesomeIcon icon={faGithub} size="2x" />
              <p>Public</p>
            </a>
          </Link>
        </div>
      </div>
      <div>
        <div>
          <p className="text-gray-200 text-sm">Members</p>
          <div className="flex flex-row mb-2">
            <img
              className="border-2 hover:border-violet object-cover rounded-xl w-6 h-6 "
              src="https://images.unsplash.com/photo-1488716820095-cbe80883c496?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"
              alt="User 01"
            />

            <img
              className="border-2 hover:border-violet object-cover w-6 h-6 rounded-xl mx-2"
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
              alt="User 02"
            />
            <img
              className="border-2 hover:border-violet object-cover w-6 h-6 rounded-xl"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
              alt="User 03"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-colo text-gray-100 text-sm">Progress</p>
          <div className="mt-1 h-2 w-12/12 rounded-lg bg-gray-100">
            <div className="h-2 w-10/12 bg-violet rounded-lg" />
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-3 grid grid-cols-5 gap-2">
              <div className="col-span-3 flex flex-row text-gray-500 bg-gray-100 w-auto h-auto px-1 rounded-full my-2 text-xs">
                <p>O</p>
                <p className="mx-1">53h</p>
                <p>estimated</p>
              </div>
              <div className="col-span-2 flex flex-row text-gray-500 bg-gray-100 w-auto h-auto px-1 rounded-full my-2 text-xs">
                <p>O</p>
                <p className="mx-1">13h</p>
                <p>left</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <ul className="list-disc text-violet">
            <li className="float-left ml-4 mr-7">Typescript</li>
            <li className="float-left">NodeJs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
