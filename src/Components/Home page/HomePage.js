import React from 'react';
import styles from './HomPage.module.css'

const HomePage = (props) => {
    let drawingKingdoms = props.props.initialState.subjects.map(m =>
        <div className={styles.kingdomSelectionArea} onClick={() => {
            props.props.currentPerson(m)
        }}>
            <div className={styles.kingdomImage}>
                <img src={require('../../images/' + m.image)}
                     alt={m.name}/>
            </div>
            <div className={styles.kingdomName}>
                {m.name}
            </div>
        </div>);
    return (
        <div className={styles.background}>
            <div className={styles.wholePage}>
                <div className={styles.workZone}>
                    <div className={styles.login}>
                        <img src={require('../../images/logo.png')} alt="logo"/>
                    </div>
                    <div className={styles.kingdomArea}>{drawingKingdoms}</div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
