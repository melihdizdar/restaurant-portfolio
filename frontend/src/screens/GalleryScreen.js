import React, { useState, useCallback } from "react";
import "../styles/Gallery/gallery.css";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

export default function GalleryScreen() {
    const photos = [
        {
            src: 'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            width: 2,
            height: 4
        },
        {
            src: 'https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            width: 2,
            height: 2
        },
        {
            src: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            width: 2,
            height: 4
        },
        {
            src: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            width: 2,
            height: 2
        },
        {
            src: 'https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            width: 2,
            height: 4
        },
        {
            src: 'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            width: 2,
            height: 4
        },
        {
            src: 'https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            width: 2,
            height: 4
        },
    ];
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);
    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    return (
        <div className="gallery">
            <div className="headerStage">
                <div className="headerText">Galeri</div>
            </div>
            <div className="photoswipeGallery">
                <Gallery photos={photos} direction={"column"} onClick={openLightbox}/>
                <ModalGateway>
                    {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                        currentIndex={currentImage}
                        views={photos.map(x => ({
                            ...x,
                            srcset: x.srcSet,
                            caption: x.title
                        }))}
                        />
                    </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </div>
    )
}
