import React from 'react';
import styles from "./WorkPage.module.css"

const WorkPage = (props) => {
    let zoneOfSubordinates = props.props.initialState.subjects
        .map(m => <div className={styles.subjectElement}
                       onClick={() => {
                           props.props.currentPerson(m)
                       }}>
            <div className={styles.subjectAvatarBlock}>{
                <img className={styles.subjectAvatar} src={require('../../images/' + m.image)} alt={m.name}/>}
                {(() => {
                    return m.subordinatesOfAllLevels !== 0 ?
                        <div className={styles.personSubjectsCountOfSubject}>
                            <img className={styles.subjectBorderOfSubject}
                                 src={require('../../images/site/subjectBorder.png')} alt='subjectBorder'/>
                            <div className={styles.subjectsCountOfSubject}>
                                {m.subordinatesOfAllLevels}
                            </div>
                        </div>
                        : null
                })()}
            </div>
            <div className={styles.subjectName}>{m.name}</div>
            <div className={styles.subjectPost}>{m.post}</div>
        </div>);
    return (
        <div className={styles.background}>
            <div className={styles.workFullPage}>
                <div className={styles.mainElement}>
                    <div className={styles.backButton} onClick={() => {
                        props.props.back(props.props.initialState.person[0].parent)
                    }}>
                        back
                    </div>
                    <div className={styles.personBlock}>
                        <div className={styles.personAvatarWorkZone}>
                            <div className={styles.previousButton}>
                                <div className={styles.button} onClick={() => {
                                    props.props.switchPingPagePrevious(props.props.initialState.person,
                                        props.props.initialState.person[0].parent)
                                }}>
                                    <img src={require('../../images/site/Previous.svg')} alt="Previous"/>
                                </div>
                            </div>
                            <div className={styles.avatarBlock}>
                                <img className={styles.personAvatar}
                                     src={require('../../images/' + props.props.initialState.person[0].image)}
                                     alt={props.props.initialState.person.name}/>
                                {(() => {
                                    return props.props.initialState.person[0].subordinatesOfAllLevels !== 0
                                    && props.props.initialState.person[0].parent !== undefined ?
                                        <div className={styles.personSubjectsCount}>
                                            <img className={styles.subjectBorder}
                                                 src={require('../../images/site/subjectBorder.png')}
                                                 alt='subjectBorder'/>
                                            <div className={styles.subjectsCount}>
                                                {props.props.initialState.person[0].subordinatesOfAllLevels}</div>
                                        </div>
                                        : null
                                })()}

                            </div>
                            <div className={styles.nextButton}>
                                <div className={styles.button} onClick={() => {
                                    props.props.switchPingPageNext(props.props.initialState.person,
                                        props.props.initialState.person[0].parent)
                                }}>
                                    <img src={require('../../images/site/Next.svg')} alt="Next"/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.personInfo}>
                            <div className={styles.personName}>{props.props.initialState.person[0].name}</div>
                            <div className={styles.personPost}>{props.props.initialState.person[0].post}</div>
                        </div>
                    </div>
                    <div className={styles.logoBlock}>
                            <img onClick={() => {
                                props.props.home(props.props.initialState.person)
                            }} src={require('../../images/logo.png')} alt="logo"/>
                    </div>
                    <div className={styles.elementBlock}>
                        {(() => {
                            if (props.props.initialState.person[0].subordinatesOfAllLevels !== 0) {
                                return <img alt="element"/>
                            }
                        })()}
                    </div>
                    <div className={styles.subjectsBlock}>

                        <div className={styles.subjects}>
                            {zoneOfSubordinates}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkPage;
