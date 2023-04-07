const flowsTemplate = {
  //tab的名字與key
  name: "Flows",
  key: 0,
  // 每個tab上方的工具欄/搜尋列，需事先定義好
  bar: (
    <div className="row m-0 content-top-bar">
      <div className="col-auto d-flex align-items-center justify-content-around me-auto">
        <img
          className="content-top-bar-pic me-2"
          src="src/assets/edit_white_24dp.svg"
        />
        <div className="text-white">Flows</div>
      </div>
      <div className="col-auto d-flex align-items-center justify-content-around ms-auto">
        <img
          className="content-top-bar-pic me-2"
          src="src/assets/sort_white_24dp.svg"
        />
        <div className="text-white">Oldest to newest</div>
      </div>
    </div>
  ),
  // Flows頁面中會出現的Flow列表
  layout: (tab, intoFlow) => {
    return (
      <div className="content-body py-4">
        <div className="d-flex flex-wrap align-items-center justify-content-evenly">
          {tab.content.map((item) => {
            if (item.src !== undefined) {
              return (
                <div className="mt-4 px-3 content-item" key={item.name}>
                  <div
                    className="content-item-pic"
                    onClick={() => intoFlow(tab.key, item.name)}
                  ></div>
                  <div className="d-flex content-item-desc">
                    <div className="me-auto">{item.name}</div>
                    <div className="ms-auto">Edited {item.time} hours ago</div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="mt-4 px-3 content-item" key={item.name}></div>
              );
            }
          })}
        </div>
      </div>
    );
  },
  content: [
    { src: "", name: "flow1", time: "1" },
    { src: "", name: "flow2", time: "2" },
    { src: "", name: "flow3", time: "3" },
    { src: "", name: "flow4", time: "4" },
    { src: "", name: "flow5", time: "5" },
    { src: "", name: "flow6", time: "6" },
  ],
};
export default flowsTemplate;
