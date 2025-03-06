import React from "react";
import "./Table.css";
import AppleWatch from "../../assets/img/Rectangle 4976.png";
import MackBook from "../../assets/img/Rectangle 4977.png";
import Dell from "../../assets/img/Rectangle 4978.png";
import HP from "../../assets/img/Rectangle 9.png";
function Table() {
  return (
    <table className="w-full mt-5 h-[50%]  ">
      <thead >
        <tr className="text-left   border-top w-full">
          <th className="thead-text  ">Product Name</th>
          <th className="thead-text">Category</th>
          <th className="thead-text">Price</th>
          <th className="thead-text">Sold</th>
          <th className="thead-text">Profit</th>
        </tr>
      </thead>
      <tbody  className="">
        <tr className="mt-3 border-top">
          <td className="text-info-prodcut h-full flex items-center gap-3">
            <img
              className="object-cover rounded-xl"
              height="50px"
              width="60px"
              src={AppleWatch}
            />
            Apple Watch Series 7
          </td>
          <td className="text-info-prodcut">Electronics</td>
          <td className="text-info-prodcut">269$</td>
          <td className="text-info-prodcut">22</td>
          <td className="text-profit">45$</td>
        </tr>
        <tr className="border-top">
          <td className="text-info-prodcut  h-full flex items-center gap-3">
            <img
              className="object-cover rounded-xl"
              height="50px"
              width="60px"
              src={MackBook}
              alt=""
            />
            Macbook Pro M1
          </td>
          <td className="text-info-prodcut">Electronics</td>
          <td className="text-info-prodcut">$546</td>
          <td className="text-info-prodcut">34</td>
          <td className="text-profit">$125</td>
        </tr>
        <tr className="border-top">
          <td className="text-info-prodcut h-full flex items-center gap-3">
            <img
              className="object-cover rounded-xl"
              height="50px"
              width="60px"
              src={Dell}
              alt=""
            />
            Dell Inspiron 15
          </td>
          <td className="text-info-prodcut">Electronics</td>
          <td className="text-info-prodcut">$443</td>
          <td className="text-info-prodcut">64</td>
          <td className="text-profit">$247</td>
        </tr>
        <tr className="border-top">
          <td className="text-info-prodcut  h-full flex items-center gap-3">
        
            <img
              className="object-cover rounded-xl"
              height="50px"
              width="60px"
              src={HP}
              alt=""
            />
            HP Probook 450
          </td>
          <td className="text-info-prodcut">Electronics</td>
          <td className="text-info-prodcut">$499</td>
          <td className="text-info-prodcut">72</td>
          <td className="text-profit">$103</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
