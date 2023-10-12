import React from "react";

const ListDown = ({ product }) => {
    return (
        <React.Fragment>
            <div
                style={{
                    border: "1px solid gray",
                    borderRadius: "15px",
                    flexGrow: 1,
                    flexBasis: 400,
                    width: "31%",
                    margin: "20px",
                }}
            >
                <div style={{ padding: "10px" }}>
                    <img
                        src={product?.image}
                        alt="new-image1"
                        style={{
                            display: "block",
                            margin: "0px auto",
                            boxShadow: "0px 6px 5px #ccc",
                            borderRadius: "50%",
                        }}
                        width={130}
                        height={130}
                    />
                    <div>
                        <div
                            style={{
                                color: "#00113E",
                                fontSize: "18px",
                                fontWeight: 800,
                                textAlign: "center",
                                padding: "15px",
                            }}
                        >
                            {product?.title}
                        </div>
                        <div
                            style={{
                                color: "#828282",
                                fontSize: "15px",
                                textAlign: "center",
                            }}
                        >
                            {product?.description}
                        </div>
                    </div>
                    <div
                        style={{
                            padding: "10px",
                            background: "skyblue",
                            fontSize: "15px",
                            width: "60px",
                            borderRadius: "15px",
                            display: "block",
                            margin: "15px auto",
                        }}
                    >
                        <div style={{ textAlign: "center" }}>
                            <span
                                style={{ color: "blue", paddingRight: "2px", fontWeight: 600 }}
                            >
                                {product?.rating?.rate || 0}
                            </span>
                            /
                            <span
                                style={{
                                    paddingLeft: "2px",
                                    color: "#00113E",
                                    fontWeight: 600,
                                }}
                            >
                                {product?.rating?.count || 100}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ListDown;
