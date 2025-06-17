import { MAX_COLORS } from '@/colors';
import type { QueryId, QueryIdToQueryInfoMap, QueryInfo } from '@/types';
import CodeIcon from '@mui/icons-material/Code';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Checkbox, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import { useState } from 'react';

import QueryTextPreview from './QueryTextPreview';

type QuerySelectionItemProps = {
  query: QueryInfo;
  checked: boolean;
  handleChange: () => void;
  handleInactivateQuery: (queryId: QueryId) => void;
};

type QuerySelectionProps = {
  queries: QueryIdToQueryInfoMap;
  selectedQueryIds: Set<QueryId>;
  setSelectedQueryIds: React.Dispatch<React.SetStateAction<Set<QueryId>>>;
  onInactivateQuery: (queryId: QueryId) => void;
};

export function QuerySelectionItem({ query, checked, handleChange, handleInactivateQuery }: QuerySelectionItemProps) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePreviewMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setPreviewOpen(true);
  };

  const handlePreviewMouseLeave = () => {
    setPreviewOpen(false);
    setAnchorEl(null);
  };

  return (
    <>
      <ListItem
        disablePadding
        secondaryAction={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Tooltip title="View query" arrow placement="top">
              <IconButton size="small" onMouseEnter={handlePreviewMouseEnter} onMouseLeave={handlePreviewMouseLeave}>
                <CodeIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Remove query" arrow placement="right">
              <IconButton
                size="small"
                edge="end"
                onClick={() => {
                  handleInactivateQuery(query.queryId);
                }}
              >
                <DeleteIcon fontSize="small" color="error" />
              </IconButton>
            </Tooltip>
          </Box>
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
      <QueryTextPreview queryText={query.query_string} queryName={query.query_name} anchorEl={anchorEl} open={previewOpen} placement="right" />
    </>
  );
}

export function QuerySelection({ queries, selectedQueryIds, setSelectedQueryIds, onInactivateQuery }: QuerySelectionProps) {
  const handleSelectSingleQuery = (queryId: QueryId) => {
    setSelectedQueryIds((prev) => {
      const next = new Set(prev);
      if (next.has(queryId)) {
        next.delete(queryId);
      } else {
        next.add(queryId);
      }
      return next;
    });
  };

  const handleSelectAll = () => {
    if (selectedQueryIds.size === 0) {
      setSelectedQueryIds(new Set(queries.keys()));
    } else {
      setSelectedQueryIds(new Set());
    }
  };

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
          <ListItemButton onClick={handleSelectAll} disabled={queries.size === 0}>
            <ListItemIcon>
              <Checkbox
                disabled={queries.size === 0}
                color="default"
                checked={queries.size > 0 && selectedQueryIds.size === queries.size}
                indeterminate={selectedQueryIds.size > 0 && selectedQueryIds.size !== queries.size}
                disableFocusRipple
                disableTouchRipple
              />
            </ListItemIcon>
            <ListItemText primary="All queries" sx={{ wordBreak: 'break-all' }} />
          </ListItemButton>
        </ListItem>
        <Divider />
        {Array.from(queries, ([identifier, query]) => (
          <QuerySelectionItem
            key={identifier}
            query={query}
            checked={selectedQueryIds.has(query.queryId)}
            handleChange={() => {
              handleSelectSingleQuery(query.queryId);
            }}
            handleInactivateQuery={() => {
              onInactivateQuery(query.queryId);
            }}
          />
        ))}
      </List>
    </Box>
  );
}

export default QuerySelection;
