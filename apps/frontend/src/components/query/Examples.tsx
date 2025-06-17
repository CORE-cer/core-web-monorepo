import type { ExampleData } from '@/types';
import { Divider, List, ListItem, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import { Fragment } from 'react';

type ExamplesProps = {
  examples: ExampleData[];
  setExample: (example: ExampleData) => void;
};

export function Examples({ examples, setExample }: ExamplesProps) {
  return (
    <List dense sx={{ flex: 1, overflow: 'auto' }} subheader={<ListSubheader sx={{ borderBottom: 1, borderColor: 'divider' }}>{'Examples'}</ListSubheader>}>
      {examples.map((example, idx) => (
        <Fragment key={idx}>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setExample(example);
              }}
            >
              <ListItemText primary={`${(idx + 1).toString()}. ${example.title}`} />
            </ListItemButton>
          </ListItem>
          <Divider variant="middle" />
        </Fragment>
      ))}
    </List>
  );
}

export default Examples;
