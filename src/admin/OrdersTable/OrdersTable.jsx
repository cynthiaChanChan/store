import React from "react";
import { OrdersRow } from "../";
import { PaginationControls } from "../../common";

const OrdersTable = (props) => {
    return (
        <div>
            <h4 className="bg-info text-white text-center p-2">
                {props.totalSize} Orders
            </h4>
            <PaginationControls keys={["ID", "Name"]} {...props} />

            <table className="table table-sm table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th className="text-right">Total</th>
                        <th className="text-left">Shipped</th>
                    </tr>
                </thead>
                <tbody>
                    {props.orders.map((order) => (
                        <OrdersRow
                            key={order.id}
                            order={order}
                            toggleShipped={() =>
                                props.toggleShipped(order.id, !order.shipped)
                            }
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersTable;
