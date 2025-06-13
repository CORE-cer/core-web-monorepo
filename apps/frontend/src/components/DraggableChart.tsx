import { Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Resizable } from 're-resizable';
import React, { type RefObject, useState } from 'react';

import './resizable-chart.css';

type DraggableChartProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  onDragEnd: (id: string, newPosition: { x: number; y: number }) => void;
  onResize: (id: string, newSize: { width: number; height: number }) => void;
  position: { x: number; y: number };
  size: { width: number; height: number };
  isDragging: boolean;
  onDragStart: (id: string) => void;
  onDragStop: () => void;
  justResizedRef: RefObject<boolean>; // Add this line
};

const DraggableChart: React.FC<DraggableChartProps> = ({
  id,
  title,
  children,
  onDragEnd,
  onResize,
  position,
  size,
  isDragging,
  onDragStart,
  onDragStop,
  justResizedRef, // Add this line
}) => {
  const [isResizing, setIsResizing] = useState(false);
  return (
    <motion.div
      drag={!isResizing}
      dragMomentum={false}
      dragElastic={0}
      onDragStart={() => {
        onDragStart(id);
      }}
      onDragEnd={(_, info) => {
        onDragStop();
        if (justResizedRef.current) {
          return; // Don't process drag if we just resized
        }
        onDragEnd(id, {
          x: position.x + info.offset.x,
          y: position.y + info.offset.y,
        });
      }}
      animate={{
        x: position.x,
        y: position.y,
        scale: isDragging ? 1.05 : 1,
        zIndex: isDragging || isResizing ? 1000 : 1,
      }}
      whileDrag={{
        scale: 1.05,
        zIndex: 1000,
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
      }}
      style={{
        position: 'absolute',
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 30,
      }}
    >
      <Resizable
        size={{
          width: size.width,
          height: size.height,
        }}
        onResizeStart={() => {
          setIsResizing(true);
        }}
        onResizeStop={(_, _direction, _ref, d) => {
          setIsResizing(false);
          justResizedRef.current = true; // Set the flag here
          onResize(id, {
            width: size.width + d.width,
            height: size.height + d.height,
          });
          // Reset the flag after a short delay to allow resize to complete
          setTimeout(() => {
            justResizedRef.current = false;
          }, 100);
        }}
        minWidth={300}
        minHeight={250}
        maxWidth={800}
        maxHeight={600}
        enable={{
          top: false,
          right: true,
          bottom: true,
          left: false,
          topRight: false,
          bottomRight: true,
          bottomLeft: false,
          topLeft: false,
        }}
        handleStyles={{
          right: {
            right: '-5px',
            width: '10px',
            height: '100%',
            backgroundColor: 'transparent',
            cursor: 'ew-resize',
          },
          bottom: {
            bottom: '-5px',
            width: '100%',
            height: '10px',
            backgroundColor: 'transparent',
            cursor: 'ns-resize',
          },
          bottomRight: {
            right: '-5px',
            bottom: '-5px',
            width: '20px',
            height: '20px',
            backgroundColor: '#1976d2',
            cursor: 'nw-resize',
            borderRadius: '50%',
            opacity: 0.7,
          },
        }}
        handleClasses={{
          right: 'resize-handle-right',
          bottom: 'resize-handle-bottom',
          bottomRight: 'resize-handle-corner',
        }}
        className={`resizable-chart ${isResizing ? 'resizing' : ''}`}
      >
        <Paper
          sx={{
            p: 2,
            cursor: isResizing ? 'default' : 'grab',
            '&:active': {
              cursor: isResizing ? 'default' : 'grabbing',
            },
            userSelect: 'none',
            width: '100%',
            height: '100%',
            boxShadow: isDragging ? 6 : isResizing ? 4 : 2,
            border: isResizing ? '2px solid #1976d2' : 'none',
            transition: 'border 0.2s ease, box-shadow 0.2s ease',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            '& .resize-handle-right:hover, & .resize-handle-bottom:hover': {
              backgroundColor: 'rgba(25, 118, 210, 0.1)',
            },
            '& .resize-handle-corner:hover': {
              opacity: 1,
              transform: 'scale(1.2)',
            },
          }}
        >
          <Typography variant="h6" textAlign="center" sx={{ mb: 2, flexShrink: 0 }}>
            {title}
          </Typography>
          <div style={{ flex: 1, minHeight: 0, width: '100%' }}>{children}</div>
        </Paper>
      </Resizable>
    </motion.div>
  );
};

export default DraggableChart;
