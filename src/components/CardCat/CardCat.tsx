import styles from "./CardCat.module.css";

type CatCardProps = {
  imageUrl: string | undefined;
  altText?: string;
  loading: boolean;
  error: string | null;
};

export const CardCat = ({
  imageUrl,
  altText = "Cat",
  loading,
  error,
}: CatCardProps) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!imageUrl) return <div>No cat to display</div>;
  return (
    <div className={styles.cardContainer}>
      <img src={imageUrl} alt={altText} className={styles.catImage} />
    </div>
  );
};
