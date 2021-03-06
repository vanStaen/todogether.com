import React, { useState } from "react";
import { Radio, Tooltip } from "antd";
import { observer } from "mobx-react";
import {
  UnorderedListOutlined,
  DatabaseOutlined,
  AppstoreOutlined,
  CheckSquareOutlined,
  CloseSquareOutlined,
} from "@ant-design/icons";

import { listStore } from "../../../stores/listStore/listStore";

import "./ListHeader.css";

export const ListHeader = observer(() => {
  const [showListOfLists, setShowListOfLists] = useState(false);

  const ShowListClickHander = () => {
    //const listsContainer = document.getElementById("listOfLists");
    //listsContainer.style.height = showListOfLists ? "200px" : "0px";
    setShowListOfLists(!showListOfLists);
  };

  const showCompletedClickHandler = (e) => {
    listStore.setShowCompleted(e.target.value);
  };

  const displayAsListClickHandler = (e) => {
    listStore.setDisplayAslist(e.target.value);
  };

  const hideListOfListsHandler = () => {
    setShowListOfLists(false);
  };

  return (
    <div>
      <div className="listHeader">
        <div className="listHeader__ListNameContainer">
          <Tooltip title="Switch between list">
            <div className="listHeader__rowLogo" onClick={ShowListClickHander}>
              <UnorderedListOutlined />
            </div>
          </Tooltip>
          My long titled shared todolist
        </div>
        {!listStore.taskInEditMode && (
          <div className="listHeader__SwitchContainer">
            <Tooltip title="Change display">
              <div className="listHeader__Switch">
                <Radio.Group
                  defaultValue={listStore.displayAslist}
                  size="small"
                  buttonStyle="solid"
                  onChange={displayAsListClickHandler}
                >
                  <Radio.Button value={true}>
                    <DatabaseOutlined />
                  </Radio.Button>
                  <Radio.Button value={false}>
                    <AppstoreOutlined />
                  </Radio.Button>
                </Radio.Group>
              </div>
            </Tooltip>
            &nbsp;
            <Tooltip
              title={
                listStore.showCompleted
                  ? "Hide completed task"
                  : "Show completed task"
              }
            >
              <div className="listHeader__Switch">
                <Radio.Group
                  defaultValue={listStore.showCompleted}
                  size="small"
                  buttonStyle="solid"
                  onChange={showCompletedClickHandler}
                >
                  <Radio.Button value={true}>
                    <CheckSquareOutlined />
                  </Radio.Button>
                  <Radio.Button value={false}>
                    <CloseSquareOutlined />
                  </Radio.Button>
                </Radio.Group>
              </div>
            </Tooltip>
          </div>
        )}
      </div>
      {showListOfLists && (
        <>
          <div className="listOfLists" id="listOfLists">
            <div>My shared to do list</div>
            <div>K??hlschrank</div>
            <div>Private todos</div>
          </div>
          <div className="fullScreen" onClick={hideListOfListsHandler}></div>
        </>
      )}
    </div>
  );
});
