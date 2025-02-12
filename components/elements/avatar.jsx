import React from 'react';
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';

const Avatar = ({ seed }) => {
  const avatar = createAvatar(lorelei, {
    seed: seed,
    size: 58,
    backgroundColor: 'transparent',

  });

  // تبدیل SVG به رشته
  const avatarSvg = avatar.toString();

  return avatarSvg
};

export default Avatar;