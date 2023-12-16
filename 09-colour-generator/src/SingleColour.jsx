import { toast } from "react-toastify";

const SingleColour = ({ colour, index }) => {
  const { hex, weight } = colour;

  const copyToClipboard = async (hex) => {
    const clipboardPermission = await navigator.permissions.query({ name: 'clipboard-read' });
    if (clipboardPermission.state==="granted") {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        // console.log(hex);
        toast.success(`#${hex} successfully copied to clipboard.`);
      } catch (error) {
        toast.error("Error copying to clipboard.");
      }
    } else {
      toast.error("Clipboard access not available");
    }
  };

  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{background: `#${hex}`}}
      onClick={() => copyToClipboard(hex)}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};

export default SingleColour;
