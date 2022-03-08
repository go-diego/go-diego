import Image from "next/image";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";

import {blurPlaceHolderDataUrl} from "../constants";
import {Artist} from "types";

interface TopArtistsGridListProps {
  artists: Artist[];
}

export default function TopArtistsGridList({artists}: TopArtistsGridListProps) {
  const classes = useStyles();

  return (
    <ImageList component="div" gap={2}>
      {artists.map((artist, index) => (
        <ImageListItem
          key={artist.artistUrl}
          cols={[0, 9].includes(index) ? 2 : 1}
          rows={[0, 9].includes(index) ? 2 : 1}
          component={({children, ...rest}) => (
            <a
              href={artist.artistUrl}
              aria-label={`${artist.name} link`}
              target="__blank"
              {...rest}>
              {children}
            </a>
          )}>
          <Image
            src={artist.imageUrl}
            alt={artist.name}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={blurPlaceHolderDataUrl}
          />
          <ImageListItemBar
            title={artist.name}
            position="bottom"
            className={classes.titleBar}
            classes={{
              title: classes.title
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const useStyles = makeStyles(() =>
  createStyles({
    titleBar: {
      background:
        "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
        "rgba(0,0,0,0.3) 75%, rgba(0,0,0,0) 100%)"
    },
    title: {
      fontWeight: "bold"
    }
  })
);
