import React from "react";

const Header = () => {
  return (
    <div className="h-20 bg-slate-200 p-5 grid grid-cols-2">
      <div>
        <h1 className="text-2xl">生成AI教育用アプリ</h1>
      </div>
      <div className="text-right">
        <button>入力</button>
        <button>削除</button>
      </div>
    </div>
  );
};

export default Header;
