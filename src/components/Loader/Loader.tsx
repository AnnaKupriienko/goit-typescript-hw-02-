import React from "react";
import css from "./Loader.module.css";
import { InfinitySpin } from 'react-loader-spinner';

const Loading: React.FC = () => {
  return (
    <div className={css.loader}>
      <InfinitySpin  width="200" color="#4fa94d" />
    </div>
  );
};

export default Loading;