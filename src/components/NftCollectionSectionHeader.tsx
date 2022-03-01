import {makeStyles, createStyles} from "@material-ui/core/styles";
import {Typography, Box, Chip, Tooltip} from "@material-ui/core";
import CopyIcon from "@material-ui/icons/FileCopy";
import CheckIcon from "@material-ui/icons/Done";
import {useState} from "react";
import NftAvatar from "./NftAvatar";

interface NftCollectionSectionHeaderProps {
  avatarUrl: string;
  ens: string;
  address: string;
}

const NftCollectionSectionHeader = (props: NftCollectionSectionHeaderProps) => {
  const {avatarUrl, ens, address} = props;
  const [isCopied, setIsCopied] = useState(false);
  const classes = useStyles();

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setIsCopied(true);
  };

  return (
    <Typography gutterBottom component="div" className={classes.root}>
      <Box pr={1} display="flex" alignItems="center">
        {avatarUrl && <NftAvatar src={avatarUrl} width={60} height={60} />}
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Typography className={classes.title}>{ens}</Typography>
        <Tooltip title={`${isCopied ? "Copied" : "Copy"} ${address}`}>
          <Chip
            size="small"
            label={`${address.slice(0, 6)}...${address.slice(
              address.length - 4
            )}`}
            clickable
            onDelete={handleCopy}
            deleteIcon={isCopied ? <CheckIcon /> : <CopyIcon />}
          />
        </Tooltip>
      </Box>
    </Typography>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center"
    },
    title: {
      fontWeight: "bold"
    }
  })
);

export default NftCollectionSectionHeader;
