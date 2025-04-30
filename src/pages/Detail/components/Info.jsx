import styles from "./Info.module.css";

export default function Info({ description_obj }) {
  return (
    <div className={styles.Info}>
      <div className={styles.header}>GIỚI THIỆU</div>
      <p
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: `
                        ${description_obj.des1}<br/><br/>
                        ${description_obj.des2}<br/><br/>
                        ${description_obj.des3}<br/><br/>
                        ${description_obj.des4}
                    `,
        }}
      />
    </div>
  );
}
