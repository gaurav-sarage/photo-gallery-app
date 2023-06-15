const Modal = ({ data, content, setSelectedContent, setShowModal }) => {
    const { name, url, description, date, type } = content;
    return (
        <div style={StyleSheet.modal}>
            <div style={styles.modalContent}>
                <div style={styles.modalHeader}>
                    <h1 style={styles.modalTitle}>
                        {name}
                    </h1>
                    <button style={styles.modalCloseButton} onClick={() => setShowModal(false)}>
                        Close
                    </button>
                </div>
                <div style={styles.splitContainer}>
                    <div style={styles.modalImageContainer}>
                        <img style={styles.modalImage} src={url} />
                        <p style={styles.modalDescriptionText}>
                            {description}
                        </p>
                    </div>
                    <div style={styles.modalDescription}>
                        <div style={styles.modalRowData}>
                            <p style={styles.modalDescriptionText}>
                                Date
                            </p>
                            <p style={styles.modalDescriptionText}>
                                {date}
                            </p>
                        </div>
                        <div style={styles.modalRowData}>
                            <p style={styles.modalDescriptionText}>
                                {type}
                            </p>
                        </div>
                    </div>
                </div>
                <div style={styles.modalImagePicker}>
                    {data.map((image_data, index) => {
                        return (
                            <div style={styles.imageContainer} onClick={() => {
                                setSelectedContent(image_data);
                            }}
                            >
                                <img style={styles.image} src={image_data.url} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}