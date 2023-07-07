import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import NavBar from "../NavBar";
import pdfFile from "../../assets/fonts/2.2_Scales.pdf";
import classNames from "classnames";

export default function PDFViewer(){
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <>
            <NavBar/>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.8.162/build/pdf.worker.js">
                <div className={classNames({
                    'flex justify-center w-full': true,
                })}>
                    <div className={classNames({
                        'h-135 w-11/12 mt-20': true,
                    })}>
                        <Viewer
                            fileUrl={pdfFile}
                            defaultScale={1}
                            plugins={[
                                defaultLayoutPluginInstance,
                            ]}
                            className="custom-pdf-viewer"
                        />
                    </div>
                </div>
            </Worker>
        </>
    );
}
