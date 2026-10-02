"use client";

import { useState } from "react";
import type { WorkflowStage } from "@/data/portfolio";

export function WorkflowExplorer({ stages }: { stages: WorkflowStage[] }) {
  const [selectedId, setSelectedId] = useState(stages[0]?.id);
  const selected = stages.find((stage) => stage.id === selectedId) ?? stages[0];
  if (!selected) return null;

  return (
    <div className="workflow-card">
      <div className="workflow-topline mono">
        <span>
          <span className="status-dot" /> SYSTEM EXPLORER
        </span>
        <span>01 — 04</span>
      </div>
      <div className="workflow-map">
        <div className="map-caption mono">FROM INPUT TO APPLICATION</div>
        <svg
          className="workflow-connections"
          viewBox="0 0 400 260"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M105 66 H295 V194 H105"
            stroke="currentColor"
            strokeDasharray="4 6"
          />
          <path
            d="M105 66 L295 194 M295 66 L105 194"
            stroke="currentColor"
            opacity=".3"
          />
          <circle
            cx="200"
            cy="130"
            r="32"
            fill="var(--background)"
            stroke="currentColor"
          />
          <path
            d="M188 130h24m-12-12v24"
            stroke="var(--accent)"
            strokeWidth="1.5"
          />
          <circle cx="200" cy="130" r="48" stroke="currentColor" opacity=".4" />
        </svg>
        <div
          className="workflow-nodes"
          role="group"
          aria-label="Explore the AI workflow"
        >
          {stages.map((stage, index) => (
            <button
              key={stage.id}
              type="button"
              className={`workflow-node node-${stage.id}`}
              aria-pressed={selected.id === stage.id}
              aria-controls="workflow-description"
              onClick={() => setSelectedId(stage.id)}
            >
              <span className="node-number mono">0{index + 1}</span>
              <span>{stage.label}</span>
              <span className="node-symbol" aria-hidden="true">
                {["▤", "⌕", "\u2733\uFE0E", "\u2197\uFE0E"][index]}
              </span>
            </button>
          ))}
        </div>
        <p className="map-hint mono">
          SELECT A STAGE TO EXPLORE <span aria-hidden="true">{"\u2197\uFE0E"}</span>
        </p>
      </div>
      <div
        id="workflow-description"
        className="workflow-description"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="workflow-detail-heading">
          <span className="eyebrow">{selected.label}</span>
          <span className="mono detail-index">
            0{stages.indexOf(selected) + 1} / 04
          </span>
        </div>
        <h3>{selected.title}</h3>
        <p>{selected.description}</p>
        <ul className="tag-list" aria-label={`${selected.label} technologies`}>
          {selected.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
      <p className="workflow-footnote mono">
        ILLUSTRATIVE WORKFLOW <span>BUILT TO BE EXPLORED</span>
      </p>
    </div>
  );
}
