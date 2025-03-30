"use client";

import {HTMLAttributes, useEffect, useState} from "react";
import FeatureStatusIcon from "@/components/common/FeatureStatusIcon";

interface IFeature extends HTMLAttributes<HTMLSpanElement> {
  status: FeatureStatus | string[];
}

export default function Feature({status, className, children, ...p}: IFeature) {
  const [featureStatus, setFeatureStatus] = useState<FeatureStatus>({});

  useEffect(() => {
    if (Array.isArray(status)) {
      fetch(`https://compat.kbotdocs.dev/${status[0]}.json`)
        .then((res) => res.json())
        .then((data) => {
          setFeatureStatus(data[status[1]]["status"]);
        });
    }
    else {
      setFeatureStatus(status);
    }
  }, [status]);

  return (
    <span className={`[&>*]:align-middle`} {...p}>
        {Object.values(featureStatus || {}).includes(true) &&
          <FeatureStatusIcon featureStatus={featureStatus || {}} className={"mr-[4px]"}/>}
      <span className={"inline [&>p]:inline"}>{children}</span>
    </span>
  );
}