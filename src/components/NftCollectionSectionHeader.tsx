import {makeStyles, createStyles} from "@material-ui/core/styles";
import {Typography, Box, Chip, Tooltip} from "@material-ui/core";
import CopyIcon from "@material-ui/icons/FileCopy";
import CheckIcon from "@material-ui/icons/Done";
import {useState} from "react";
import {Skeleton} from "@material-ui/lab";

import NftAvatar from "./NftAvatar";

interface NftCollectionSectionHeaderProps {
  avatarUrl: string;
  ens: string;
  address: string;
}

const AVATAR_HEIGHT = 80;
const AVATAR_WIDTH = 80;

const NftCollectionSectionHeader = (props: NftCollectionSectionHeaderProps) => {
  const {avatarUrl, ens, address} = props;
  const [isCopied, setIsCopied] = useState(false);
  const classes = useStyles();

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setIsCopied(true);
  };

  return (
    <Box display="flex" alignItems="center">
      <Box pr={1} display="flex" alignItems="center">
        {avatarUrl && (
          <NftAvatar
            alt={`${ens} pfp`}
            src={avatarUrl}
            width={AVATAR_WIDTH}
            height={AVATAR_HEIGHT}
          />
        )}
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
    </Box>
  );
};

export const NftCollectionSectionHeaderSkeleton = () => {
  return (
    <Box display="flex" alignItems="center">
      <Box pr={1} display="flex" alignItems="center">
        <Skeleton
          variant="circle"
          width={AVATAR_WIDTH}
          height={AVATAR_HEIGHT}
        />
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Typography variant="h6" component="div">
          <Skeleton variant="text" width={200} />
        </Typography>
        <Typography variant="h3" component="div">
          <Skeleton variant="text" width={200} />
        </Typography>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      fontWeight: "bold"
    }
  })
);

export default NftCollectionSectionHeader;
