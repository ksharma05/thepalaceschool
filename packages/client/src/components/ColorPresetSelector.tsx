import React, { useState } from 'react';
import { SwatchIcon } from '@heroicons/react/24/outline';
import { 
  applyColorPreset, 
  getCurrentPreset, 
  presetMetadata, 
  type ColorPreset 
} from '../utils/colorPresets';

const ColorPresetSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPreset, setCurrentPreset] = useState<ColorPreset>(getCurrentPreset());

  const handlePresetChange = (preset: ColorPreset) => {
    applyColorPreset(preset);
    setCurrentPreset(preset);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-surface-primary hover:bg-surface-secondary border border-border-primary transition-colors duration-300"
        aria-label="Change color theme"
        title="Change color theme"
      >
        <SwatchIcon className="w-6 h-6 text-text-primary" />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown menu */}
          <div className="absolute right-0 mt-2 w-80 bg-surface-elevated rounded-xl shadow-xl border border-border-primary z-50 overflow-hidden">
            <div className="p-4 border-b border-border-primary">
              <h3 className="text-lg font-semibold text-text-primary">Color Theme</h3>
              <p className="text-sm text-text-secondary mt-1">
                Choose a color preset for the website
              </p>
            </div>

            <div className="p-2 max-h-96 overflow-y-auto">
              {(Object.keys(presetMetadata) as ColorPreset[]).map((preset) => {
                const meta = presetMetadata[preset];
                const isActive = currentPreset === preset;

                return (
                  <button
                    key={preset}
                    onClick={() => handlePresetChange(preset)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 mb-2 ${
                      isActive
                        ? 'bg-primary-100 dark:bg-primary-900/30 border-2 border-primary-500'
                        : 'bg-surface-primary hover:bg-surface-secondary border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Color preview */}
                      <div
                        className="w-12 h-12 rounded-lg flex-shrink-0 shadow-md"
                        style={{ background: meta.preview }}
                      />

                      {/* Preset info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-text-primary">
                            {meta.name}
                          </h4>
                          {isActive && (
                            <span className="text-xs bg-primary-500 text-white px-2 py-0.5 rounded-full">
                              Active
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-text-secondary mt-1">
                          {meta.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-3 border-t border-border-primary bg-surface-secondary">
              <p className="text-xs text-text-tertiary text-center">
                Color theme persists across sessions
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ColorPresetSelector;

