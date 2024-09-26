import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FaBitcoin } from "react-icons/fa";

const Table = () => {
  const theadData = [
    "symbol",
    "side",
    "Qty",
    "avg fill price",
    "take profit",
    "stop loss",
    "last price",
    "unrealized P&L",
    "trade value",
    "market value",
    "actions",
  ];

  const tbodyData = [
    {
      symbol: "index:btccusd",
      side: "long",
      qty: 2,
      avgFillPrice: 63664.01,
      takeProfit: 0,
      stopLoss: 0,
      lastPrice: 63838.14,
      unrealizedPL: "+350.09",
      tradeValue: "127,328.01",
      marketValue: "127,692.74",
    },
    {
      symbol: "index:ethusd",
      side: "short",
      qty: 5,
      avgFillPrice: 2300.05,
      takeProfit: 0,
      stopLoss: 0,
      lastPrice: 2345.15,
      unrealizedPL: "-112.00",
      tradeValue: "11,500.25",
      marketValue: "11,725.75",
    },
    {
      symbol: "index:ltcusd",
      side: "long",
      qty: 1,
      avgFillPrice: 180.12,
      takeProfit: 0,
      stopLoss: 0,
      lastPrice: 182.33,
      unrealizedPL: "+2.21",
      tradeValue: "180.12",
      marketValue: "182.33",
    },
  ];

  return (
    <>
      <div className="table-responsive">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              {theadData.map((title) => (
                <th key={title} className="text-capitalize">
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tbodyData.map((tData, index) => (
              <tr key={index}>
                <td className="text-uppercase">
                  <div className="d-flex gap-2 align-items-center">
                    <span className="fs-15 text-warning">
                      <FaBitcoin />
                    </span>
                    <span className="fw-semibold symbol py-1 px-2">
                      {tData.symbol}
                    </span>
                  </div>
                </td>
                <td className="text-capitalize blue-color">{tData.side}</td>
                <td className="text-capitalize">{tData.qty}</td>
                <td className="text-capitalize">{tData.avgFillPrice}</td>
                <td className="text-capitalize">{tData.takeProfit}</td>
                <td className="text-capitalize">{tData.stopLoss}</td>
                <td className="text-capitalize">{tData.lastPrice}</td>
                <td className="text-capitalize green-color">
                  {tData.unrealizedPL}
                  <span className="text-uppercase fs-10"> usd</span>
                </td>
                <td className="text-capitalize">
                  {tData.tradeValue}
                  <span className="text-uppercase fs-10"> usd</span>
                </td>
                <td className="text-capitalize">
                  {tData.marketValue}
                  <span className="text-uppercase fs-10"> usd</span>
                </td>
                <td>
                  <div className="actions d-flex gap-1">
                    <span className="edit py-1 px-2">
                      <MdOutlineEdit />
                    </span>
                    <span className="remove py-1 px-2">
                      <RxCross2 />
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
