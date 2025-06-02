import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Checkbox, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import React from 'react';

import { MAX_COLORS } from '../../colors';
import type { QueriesMap, QueryInfo } from '../../types';

interface QuerySelectionItemProps {
  query: QueryInfo;
  checked: boolean;
  handleChange: () => void;
  handleInactivateQuery: (qid: string) => void;
}

interface QuerySelectionProps {
  queries: QueriesMap;
  selectedQueryIds: Set<string>;
  setSelectedQueryIds: React.Dispatch<React.SetStateAction<Set<string>>>;
  onInactivateQuery: (qid: string) => void;
}

const QuerySelectionItem: React.FC<QuerySelectionItemProps> = ({ query, checked, handleChange, handleInactivateQuery }) => {
  return (
    <ListItem
      disablePadding
      secondaryAction={
        <Tooltip title={`Remove query`} arrow placement="right">
          <IconButton
            size="small"
            edge="end"
            onClick={() => {
              handleInactivateQuery(query.result_handler_identifier);
            }}
          >
            <DeleteIcon fontSize="small" color="error" />
          </IconButton>
        </Tooltip>
      }
    >
      <ListItemButton onClick={handleChange}>
        <ListItemIcon>
          <Checkbox
            color="default"
            checked={checked}
            className={`color-${(Number(query.result_handler_identifier) % MAX_COLORS).toString()}`}
            disableFocusRipple
            disableTouchRipple
          />
        </ListItemIcon>
        <ListItemText primary={query.query_name} sx={{ wordBreak: 'break-all' }} />
      </ListItemButton>
    </ListItem>
  );
};

const QuerySelection: React.FC<QuerySelectionProps> = ({ queries, selectedQueryIds, setSelectedQueryIds, onInactivateQuery }) => {
  const handleSelectSingleQuery = (qid: string) => {
    setSelectedQueryIds((prev) => {
      const next = new Set(prev);
      if (next.has(qid)) {
        next.delete(qid);
      } else {
        next.add(qid);
      }
      return next;
    });
  };

  const handleSelectAll = () => {
    if (selectedQueryIds.size === 0) {
      setSelectedQueryIds(new Set(Object.keys(queries)));
    } else {
      setSelectedQueryIds(new Set());
    }
  };

  const queriesArray = Object.values(queries);

  return (
    <Box
      sx={{
        width: 'inherit',
        overflowY: 'scroll',
        flex: 1,
      }}
    >
      <List dense>
        <ListItem disablePadding>
          <ListItemButton onClick={handleSelectAll} disabled={queriesArray.length === 0}>
            <ListItemIcon>
              <Checkbox
                disabled={queriesArray.length === 0}
                color="default"
                checked={queriesArray.length > 0 && selectedQueryIds.size === queriesArray.length}
                indeterminate={selectedQueryIds.size > 0 && selectedQueryIds.size !== queriesArray.length}
                disableFocusRipple
                disableTouchRipple
              />
            </ListItemIcon>
            <ListItemText primary="All queries" sx={{ wordBreak: 'break-all' }} />
          </ListItemButton>
        </ListItem>
        <Divider />
        {queriesArray.map((query, idx) => (
          <QuerySelectionItem
            key={idx}
            query={query}
            checked={selectedQueryIds.has(query.result_handler_identifier)}
            handleChange={() => handleSelectSingleQuery(query.result_handler_identifier)}
            handleInactivateQuery={() => onInactivateQuery(query.result_handler_identifier)}
          />
        ))}
      </List>
    </Box>
  );
};

export default QuerySelection;
