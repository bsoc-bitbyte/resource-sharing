import React from "react";
import { Viewer, Worker, ViewMode, ProgressBar } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import NavBar from "../NavBar";
import pdfFile from "../../../public/2.2_Scales.pdf";
import classNames from "classnames";

export default function PDFViewer(){
    const transform = (slot) => ({
        ...slot,
        Open: () => <></>,
        OpenMenuItem: () => <></>,
        Print: () => <></>,
        PrintMenuItem: () => <></>,
        ShowProperties: () => <></>,
        ShowPropertiesMenuItem: () => <></>,
        SwitchTheme: () => <></>,
        SwitchThemeMenuItem: () => <></>,
    });

    const renderToolbar = (Toolbar => (
        <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
    ));

    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        renderToolbar,
    });
    const { renderDefaultToolbar } = defaultLayoutPluginInstance.toolbarPluginInstance;

    return (
        <>
            <NavBar/>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.8.162/build/pdf.worker.js">
                <div className={classNames({
                    'flex justify-center w-full': true,
                })}>
                    <div className={classNames({
                        'h-[87vh] w-screen mt-20 scale-[0.96]': true,
                    })}>
                        <Viewer
                            fileUrl={pdfFile}
                            defaultScale={1}
                            plugins={[
                                defaultLayoutPluginInstance,
                            ]}
                            viewMode={window.innerWidth < 768 ? ViewMode.Single : ViewMode.DualPage}
                            onOpenError={(e) => console.log('error', e)}
                            renderLoader={(percentages) => (
                                <div style={{ width: '240px' }}>
                                    <ProgressBar progress={Math.round(percentages)} />
                                </div>
                            )}
                        />
                    </div>
                </div>
            </Worker>
        </>
    );
}
