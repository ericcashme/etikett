export const isPartComplete = (part = {}) => Object.values(part).every((val) => val.trim() !== '');

/**
 * Check if selection is complete
 * @param {Array} selection
 * @returns {boolean}
 */

export const isSelectionComplete = (selection = {}) => Object.values(selection).every(isPartComplete);

export const resetAttribute = (obj) =>
  Object.keys(obj).reduce(
    (prevAttribute, currentAttribute) => ({
      ...prevAttribute,
      [currentAttribute]: '',
    }),
    {},
  );

export const resetPart = (selection, currentPart, attribute, part, value) =>
  Object.keys(selection[currentPart])
    .slice(0, Object.keys(selection[currentPart]).indexOf(attribute) + 1)
    .reduce(
      (prevAttribute, currentAttribute) => ({
        ...resetAttribute(selection[part]),
        ...prevAttribute,
        [currentAttribute]: currentAttribute !== attribute ? selection[currentPart][currentAttribute] : value,
      }),
      {},
    );

// eslint-disable-next-line consistent-return
export const nUpdateSelection = (selection = {}, part, attribute, value) => {
  if (!Object.keys(selection).includes(part)) {
    return {
      ...selection,
      [part]: {
        [attribute]: value,
      },
    };
  }

  if (!Object.keys(selection[part]).includes(attribute)) {
    return Object.keys(selection)
      .slice(0, Object.keys(selection).indexOf(part) + 1)
      .reduce(
        (prevPart, currentPart) => ({
          ...prevPart,
          [currentPart]:
            currentPart !== part ? selection[currentPart] : { ...selection[currentPart], [attribute]: value },
        }),
        {},
      );
  }

  return Object.keys(selection)
    .slice(0, Object.keys(selection).indexOf(part) + 1)
    .reduce(
      (prevPart, currentPart) => ({
        ...prevPart,
        [currentPart]:
          currentPart !== part ? selection[currentPart] : resetPart(selection, currentPart, attribute, part, value),
      }),
      {},
    );
};

/**
 * Generate selection based on the parts.
 * @param {Array} parts
 * @returns {Object}
 */
export const getSelection = (parts = []) => {
  const getDefaultOption = (options) => {
    const defaultOption = options.filter((option) => option.default);
    return defaultOption.length === 1 && defaultOption[0].id;
  };

  return parts.reduce(
    (prevPart, currentPart) => ({
      ...prevPart,
      [currentPart.id]: currentPart.attributes.reduce(
        (prevAttribute, currentAttribute) => ({
          ...prevAttribute,
          [currentAttribute.key]: getDefaultOption(currentAttribute.options) || '',
        }),
        {},
      ),
    }),
    {},
  );
};

export const nUpdateProductInfo = (currentState, options) => {
  let newParts = [];

  const getAttributesOptions = (partId, attributes) =>
    attributes.map((attribute) => ({
      ...attribute,
      options: options[partId] && options[partId][attribute.key] ? options[partId][attribute.key] : attribute.options,
    }));

  newParts = [
    ...currentState.parts.map((part, index) => ({
      ...part,
      attributes: [...getAttributesOptions(part.id, currentState.parts[index].attributes)],
    })),
  ];
  return { parts: newParts };
};

export const nUpdateCurrentSelection = (parts, selection) =>
  parts.reduce(
    (prevPart, currentPart) => ({
      ...prevPart,
      [currentPart.id]: currentPart.attributes.reduce(
        (prevAttribute, currentAttribute) => ({
          ...prevAttribute,
          [currentAttribute.key]:
            (selection && selection[currentPart.id] && selection[currentPart.id][currentAttribute.key]) ||
            (currentAttribute.options.length === 1 && currentAttribute.options[0].id) ||
            '',
        }),
        {},
      ),
    }),
    {},
  );

export const applyDenyRulesParts = (parts) => {
  let newParts = [];
  const denyRulesFormat = ['A2_quadro'];
  const getOptions = (attributes) =>
    attributes.map((attribute) => ({
      ...attribute,
      options:
        attribute.key === 'format'
          ? attribute.options.filter((option) => !denyRulesFormat.includes(option.id))
          : attribute.options,
    }));
  newParts = [
    ...parts.map((part, index) => ({
      ...part,
      attributes: [...getOptions(parts[index].attributes)],
    })),
  ];
  return newParts;
};
